import { useEffect, useState } from 'react';
import {useParams} from 'react-router';
import adverts from './../json/advert.json'
import singleStyle from './css/singleAdvert.module.css'
import { db } from '../firebase/firebase'
import { ref, onValue } from "firebase/database";

export default function SingleAdvert() {

    const {id} = useParams();

    const [singleAdvert , setSingleAdvert] = useState({})

    useEffect(() => {
        if(!id){
            return;
        }

        const post = ref(db, 'posts');
        onValue(post, (snapshot) => {
            console.log(snapshot.ref)
            const data = snapshot.val()
            var advert = data?.filter(n => n.id == id)[0];
            setSingleAdvert(advert)
        })
    },[id])

    return (
        <div className={singleStyle.box}>
            <img src={singleAdvert.url} alt={`car-${id}`} className={singleStyle.photo}/>
            <div className={singleStyle.textBox}>
            <div className={singleStyle.valyuta}>
                    <h2>{singleAdvert.qiymet}</h2>
                    <h2>{singleAdvert.valyuta}</h2>
                </div>
                <div className={singleStyle.text}>
                    <h3>{singleAdvert.carName}</h3>
                    <p>Yenidirmi: {singleAdvert.yenidirmi ? 'Beli' : 'Xeyr'}</p>
                    <p>Yurus: {singleAdvert.yurus}km</p>
                    <p>Şəhər: {singleAdvert.city}</p>
                    <p>Rəngi: {singleAdvert.rengi}</p>
                    <p>Ili: {singleAdvert.ili}</p>
                    <p>Mator: {singleAdvert.mator}L</p>
                    <p>Sürətlər Qutusu: {singleAdvert.suretlerQutusu}</p>
                    <div className={singleStyle.carHaqqinda}>
                        <h4>Sürücünün əlavələri:</h4>
                        <p>{singleAdvert.haqqinda}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}