import React from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditLocationOutlinedIcon from '@material-ui/icons/EditLocationOutlined';
import Tooltip from '@material-ui/core/Tooltip';

export const Items = (props) => {
    let deletingItem=()=>{
        props.del(props.id)
    }
    let updatingItem=()=>{
        props.upd(props.id);
    }

    return (
        
            <div className="showList" id={props.id} style={{display:'flex',flexDirection:'row',margin:'6px 12px', border:'1px solid red',backgroundColor:'bisque',color:'blue'}}>
                
                <p style={{width:'300px'}}>{props.item}</p> 
                <Tooltip disableFocusListener disableTouchListener title="UpdateItem">
                <h3 style={{margin:'0px 10px'}} className='updating'><button onClick={()=>updatingItem()} ><EditLocationOutlinedIcon/></button></h3>
                </Tooltip>
                <Tooltip title="deleteItem">
                <h3 className="deleting"><button onClick={()=>deletingItem()}><DeleteOutlineIcon/></button></h3>
                </Tooltip>
            </div>
        
    )
}
