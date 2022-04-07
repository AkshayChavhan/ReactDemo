import React ,{useState} from 'react';


export default function MyLibrary (){

    // const [data , setData] = useState({
    //     tit : "",
    //     auth : "",
    //     num : null ,
    // })

    const [tit, setTit] = useState("");
    const [auth, setAuth] = useState("");
    const [num, setNum] = useState("");
    const [store , setStore] =useState({
        titleOfBook : "",
        authorOfBook : "",
        priceOfBook : "",
    })
    


    // const [auth , setAuth] = useState("")
    // const [num , setNum] = useState("")

    function veirfyMe(event){
        event.preventDefault();
        setStore({
            titleOfBook : tit,
            authorOfBook : auth,
            priceOfBook : num,
        }) 

        const newStore = store;
        setStore(...store , newStore);
        console.log(...store);
        setTit('');
        setAuth('');
        setNum('');

        // console.log(store.titleOfBook , store.authorOfBook , store.priceOfBook);
    }

    return(
        <>
        <div>
        <h1> Enter Book</h1><br/>
        </div>
        <div>
            <form onSubmit={veirfyMe}>

            <caption>Title</caption>
            <input type='text' value={tit} onChange={(event)=>{
                setTit(event.target.value);   
            }
            }></input><br/>

            <caption>Author</caption>
            <input type='text' value={auth}  onChange={(event)=>{
                setAuth(event.target.value);
            }}></input><br/>
    
            <caption>Price</caption>
            <input type='number' value={num} onChange={(event)=>{
                setNum(event.target.value);
            }} ></input><br/>

            <button type='submit'>Submit</button>
            </form>

            <div>
                <h1>Book Detail</h1>
                <div>
                    Title : {store.titleOfBook}<br/>
                    Author : {store.authorOfBook}<br/>
                    Price : {store.priceOfBook} <br/>

                    <span>X</span>
                    
                </div>
                
            </div>

        </div>
        </>
    )
}