import React, { useState } from 'react'
import { Items } from './Items';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import SpellcheckOutlinedIcon from '@material-ui/icons/SpellcheckOutlined';
import Tooltip from '@material-ui/core/Tooltip';

export const Todo = () => {
    let [item,setItem]=useState('');
    let [list,setList]=useState([]);
    let [letUpd,setupd]=useState(false);
    let [updIndex,setIndex]=useState(null);
    let takeInput=(e)=>{
        setItem(e.target.value);
    }
    let addList=()=>{
        if(!item)
        {
            alert('plz Do add something...')
        }
        else if(letUpd && item)
        {
            setList(
                list.map((ele)=>{
                    if(ele.id===updIndex)
                    {
                        return {...ele,name:item};
                    }
                    return ele;
                })
            )
            setupd(false);
            setIndex(null)
            setItem('');
        }
        else
        {
            setList((preVal)=>{
                const myItem={id:new Date().getTime().toString(),name:item}
                return [...preVal,myItem] 
            });
            setItem("");
        }



    }
    let deleted=(DelID)=>{
        let afterDelList=list.filter((item)=>{
            return item.id!==DelID;
        })
        setList(afterDelList);
    }

    let updated=(idd)=>{
        
        let prevData=list.find((ele)=>{
            if(ele.id===idd)
            return ele;
            return null;
        })
            setupd(true);
            setIndex(prevData.id)
            setItem(prevData.name)



        // setupd(false);
        // setItem("");
  
    }
    let DelAll=()=>{
        setList([]);
    }

  return (
    <div >
        <div className="mainDiv container text-center">
            <div className="childDiv container text-center">
                <figure>
                    <img src="https://www.pngkey.com/png/detail/205-2057514_writing-png-icon-writing-icon-png.png" alt="" width='40px' height='50px'/>
                    <figcaption className='text-decoration-underline'>Add your List here</figcaption>
                </figure>
                    {/* <i className="fa-solid fa-calendar-lines-pen"></i>/ */}
                    <div className="takeIn">
                        <input type="text" placeholder='enter ur item/interest' value={item} name='item' onChange={takeInput} />
                        
                        <span className='adding'><button onClick={addList}>{letUpd?<SpellcheckOutlinedIcon/>:item?<Tooltip title='addFresh'><i className="fa-solid fa-circle-plus fa-beat"></i></Tooltip>:<Tooltip title='addFresh'><i className="fa-solid fa-circle-plus"></i></Tooltip>} </button></span>
                    </div>
            </div>
            <div className="allList  " style={{margin:'10px auto',marginBottom:'2px',width:'30vw'}}>
                
               { list.map((item,index)=>{
                    return (
                        
                        <Items del={deleted} upd={updated} key={index} item={item.name} id={item.id} name='item'/>
                    )
                })
                }
            </div>
                
                {list.length!==0?<button onClick={DelAll}>Clear All<DeleteForeverIcon/></button>:null}
        </div>
    </div>
  )  
}
