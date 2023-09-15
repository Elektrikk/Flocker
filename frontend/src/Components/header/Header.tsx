import RightComponent from "./RightHeaderComponents";


export default function Header(){
    return (
        <div className="text-center text-primary bg-white bg-back py-2 flex h-16 w-screen items-center shadow sticky top-0" >

             <a className="text-left align-middle pl-6 flex-none text-3xl hover:text-4xl hover:text-accent " href="/">FLOCKER</a>
             <RightComponent spacing={"ml-[72rem]"} name={"CONTACT"}/>
             <RightComponent spacing={"ml-[79.5rem]"} name={"ABOUT"}/>
             <RightComponent spacing={"ml-[85.5rem]"} name={"SIGN UP"}/>

        </div>
    )
}

// 