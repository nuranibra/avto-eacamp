import { Formik , Field , Form} from "formik";
import { useEffect, useState } from "react";
import { v4 , v3} from "uuid";
import elaveStyle from './css/elaveEt.module.css'
import { db } from "../../firebase/firebase";
import { set, ref , push, onValue} from "firebase/database";

export default function ElaveEt () {

    var adverts = [];

    const [id, setId] = useState(v4())
    return (
        <div>
            <h2>Elave Et</h2>
            <div className={elaveStyle.elaveBox}>
                <Formik 
                    initialValues={{
                        id,
                        carName:'',
                        url:'',
                        qiymet:0,
                        yenidirmi:false,
                        yurus:0,
                        valyuta:'AZN',
                        haqqinda:'',
                        ili:0,
                        mator:0,
                        city:'',
                        rengi:'',
                        suretlerQutusu:'Mexanika'
                    }}
                    onSubmit={(values) => {
                        setId(v4())
                        onValue(ref(db, 'posts'), function (snapshot) {
                            const kohneArray = snapshot.val()
                            if(kohneArray !== null){
                                adverts = kohneArray;
                            }
                        })
                        const advert = {
                            id:values.id,
                            carName:values.carName,
                            url:values.url,
                            qiymet:values.qiymet,
                            yenidirmi:values.yenidirmi,
                            yurus:values.yurus,
                            valyuta:values.valyuta,
                            haqqinda:values.haqqinda,
                            ili:values.ili,
                            mator:values.mator,
                            city:values.city,
                            rengi:values.rengi,
                            suretlerQutusu:values.suretlerQutusu
                    }
                        adverts.push(advert)
                        set(ref(db, 'posts'), adverts)
                    }}
                >
                    <Form>
                        <div className={elaveStyle.form}>
                            <label for='url'>Car Photo Url</label>
                            <Field name='url' id='url' placeholder='Car Photo Url' className={elaveStyle.inp}/>
                        </div>
                        <div className={elaveStyle.form}>
                            <label for='carName'>Car Name</label>
                            <Field name='carName' id='carName' placeholder='Car Name' className={elaveStyle.inp}/>
                        </div>
                        <div className={elaveStyle.form}>
                            <label for='qiymet'>Qiymet</label>
                            <Field name='qiymet' id='qiymet' type='number' placeholder='Qiymet' className={elaveStyle.inp}/>
                        </div>
                        <div className={elaveStyle.form}>
                            <label for='yenidirmi'>Yenidirmi?</label>
                            <Field name='yenidirmi' id='yenidirmi' as='select' className={elaveStyle.inp}>
                                <option value={true}>Bəli, Yenidir</option>
                                <option value={false}>Xeyr</option>
                            </Field>
                        </div>
                        <div className={elaveStyle.form}>
                            <label for='yurus'>Yürüş</label>
                            <Field name='yurus' id='yurus' type='number' placeholder='Yürüş' className={elaveStyle.inp}/>
                        </div>
                        <div className={elaveStyle.form}>
                            <label for='valyuta'>Valyuta</label>
                            <Field name='valyuta' id='valyuta' as='select' className={elaveStyle.inp}>
                                <option value={'AZN'}>Azerbaycan Manatı(AZN)</option>
                                <option value={'USD'}>Amerikan Dolları(USD)</option>
                            </Field>
                        </div>
                        <div className={elaveStyle.form}>
                            <label for='haqqinda'>Sürücünün əlavələri</label>
                            <Field name='haqqinda' id='haqqinda' as='textarea' placeholder='Sürücünün əlavələri...'/>
                        </div>
                        <div className={elaveStyle.form}>
                            <label for='ili'>Ili</label>
                            <Field name='ili' id='ili' placeholder='Ili' type='number'/>
                        </div>
                        <div className={elaveStyle.form}>
                            <label for='mator'>Mator</label>
                            <Field name='mator' id='mator' type='number' placeholder='Mator'/>
                        </div>
                        <div className={elaveStyle.form}>
                            <label for='city'>Şəhər</label>
                            <Field name='city' id='city' placeholder='Şəhər'/>
                        </div>
                        <div className={elaveStyle.form}>
                            <label for='rengi'>Rəngi</label>
                            <Field name='rengi' id='rengi' placeholder='Rəngi'/>
                        </div>
                        <div className={elaveStyle.form}>
                            <label>Sürətlər Qutusu</label>
                            <Field name='suretlerQutusu' id='suretlerQutusu' as='select' >
                                <option value={'Mexanika'}>Mexanika</option>
                                <option value={'Avtomat'}>Avtomat</option>
                                <option value={'Variator'}>Variator</option>
                            </Field>
                        </div>
                        <div className={elaveStyle.btnBox}>
                            <button type="submit" className={elaveStyle.btn}>Add</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}