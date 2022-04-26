import React, { useContext } from 'react';
import MandatoryCard from './ui/MandatoryCard';
import DownArrow from './ui/DownArrow';
import RightArrow from './ui/RightArrow';
import Card from './ui/Card'
import classes from './cardsWrapper.module.css'
import { dataContext } from '../context/Context'

function MandatoryCourses(props) {

    const ctx = useContext(dataContext)
 
    let arr = {}
    
    for (let i = 0; i < ctx.mand.length; i++) {

        if (arr[ctx.mand[i]?.code?.split(" ")[1]]) {
            arr[ctx.mand[i]?.code?.split(" ")[1]].push(ctx.mand[i])
        } else {

             arr[ctx.mand[i]?.code?.split(" ")[1]]=[ctx.mand[i]]
        }
    }
    arr =Object.values(arr) ;


    return (
        <section className={classes.mandWrapper}>
            {arr.map((ele,ind)=>{
              
                return(<div key={ind}>
                    <div className="downArrow">
                
                <DownArrow />
                </div>
                <div className={classes.sameCode}>
                {ele.map((element, index) => {
                    return (<>
                    <div className='rightArrow'>

                            <RightArrow/>
                    </div>
                        <Card color={ctx.status.mand.color} key={index} type="mand">
                            <MandatoryCard element={element} />
                        </Card>
                    </>
                        )
                        
                    })}
                    </div>
                    </div>
            )})}


        </section>
    );
}

export default MandatoryCourses;