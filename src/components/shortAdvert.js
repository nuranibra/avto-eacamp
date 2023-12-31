import adverts from './../json/advert.json'
import advertStyle from './css/shortAdvert.module.css'
import { db } from '../firebase/firebase'
import { ref, onValue } from "firebase/database";
import { useEffect, useState } from 'react';

export default function ShortAdvert () {

    var arr = []

    const post = ref(db , '/posts');
    onValue(post, (snapshot) => {
        const data = snapshot.val();
        console.log(Array(data))
        data?.map((advert, index) => {
            arr?.push(<a href={`/advert/${advert?.id}`} className={advertStyle.link}>
                <div className={advertStyle.advert}>
                    {advert.yenidirmi ? <div className={advertStyle.new}>
                        Salon
                    </div> : ''}
                    <img src={advert.url} alt={`car-${advert.id}`} className={advertStyle.url}/>
                    <div className={advertStyle.qiymetBox}>
                        <h2>{advert.carName}</h2>
                        <div className={advertStyle.qiymet}>
                            <h2>{advert.qiymet} {advert.valyuta}</h2>
                        </div>
                        <div>
                            <p>{advert.ili}, {`${advert.mator}L`}, {advert.yurus} km</p>
                        </div>
                    </div>
                </div>
            </a>)
        })
    })

    return (
        <div className={advertStyle.adverts}>
            {arr}
        </div>
    );
}