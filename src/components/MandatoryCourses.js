import React, { useContext } from 'react';
import MandatoryCard from './ui/MandatoryCard';
import DownArrow from './ui/DownArrow';
import RightArrow from './ui/RightArrow';
import Card from './ui/Card'
import classes from './cardsWrapper.module.css'
import { dataContext } from '../context/Context'

function MandatoryCourses(props) {

    const ctx = useContext(dataContext)

    let arr = ctx.mand.reduce((prev, current) => {
        let code = current.code?.split(" ")[1]
        
        prev[code] = prev[code] ? [...prev[code], current] : [current]
        return (prev)
    }, {});
    

    // for (let i = 0; i < ctx.mand.length; i++) {
    // let code = current.code?.split(" ")[1]
    //     if (arr[code]) {
    //         arr[code].push(ctx.mand[i])
    //     } else {

    //         arr[code] = [ctx.mand[i]]
    //     }
    // }


    arr = Object.values(arr);


    return (
        <section className={classes.mandWrapper}>
            {arr.map((ele, ind) => {

                return (<div key={ind}>
                    <div className="downArrow">

                        <DownArrow />
                    </div>

                    <div className={ele.length > 1 ? classes.sameCodejust : classes.sameCode}>
                        {ele.map((element, index) => {
                            return (<div className={classes.one}>
                                <section className='rightArrow'>

                                    <RightArrow />
                                </section>
                                <Card  color="Mandatory" key={index} type="mand">
                                    <MandatoryCard element={element} />
                                </Card>
                            </div>
                            )

                        })}
                    </div>
                </div>
                )
            })}


        </section>
    );
}

export default MandatoryCourses;