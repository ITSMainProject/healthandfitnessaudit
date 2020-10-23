/*************************************************
 * Class Name: ViewProfileSurvey
 * Created Date: 10/09/2020 
 * Edited By: Min,
 * Last Edited: 12/09/2020
 * -----------------------------------------------
 * Description:
 * This will show the total star rating score on 
 * the bottom of each survey
 *************************************************/
import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const Stars = props => {
    const [rating, setRating] = useState(null)

    return (
        <div>
             {[ ...Array(5)].map((star, i) => {
                const ratingValue = i +1

                return (
                    <label>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                        />
                        <FaStar 
                            className="star"
                            color={ratingValue <= props.rateValue ? "#ffc107" : "#e4e5e9"} size={30} />
                    </label>
                )
            })}
        </div>

    )
}
export default Stars