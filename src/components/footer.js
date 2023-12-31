import footerStyle from './css/footer.module.css'

export default function Footer () {
    return <>
        <div style={{background:'blue', display:'flex', justifyContent:'space-between', marginTop:'20vh', color:'white', padding:'1%', alignItems:'center', alignSelf:'center'}}>
            <div>
                <h1 className={footerStyle.h1}>EaCamp Avto.az</h1>
            </div>
            <div>
                <p className={footerStyle.p}>Copyright © EacampAvto</p>
            </div>
        </div>
    </>
}