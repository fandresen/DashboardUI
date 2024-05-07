type Tsources = {
    id:number;
    src:string;
};
export const MembersPic = ({ImageData}:any)=>{

/*     const [imageData,setImageData]=useState<Tsources[]>()

    const fetchProfile = async ()=>{
        const response = (await axios.get('http://192.168.1.124:3000/profilePic')).data;
        setImageData(response)
    }
    useEffect(()=>{
        fetchProfile()
    },[]) */

    return(
        <>
            <div className="flex">
                {
                    ImageData?.map((image)=>(
                        <ProfilePic key={image.id} src={image.src}/>
                    ))
                }
                
            </div>
        
        </>
    )
}

const ProfilePic = ({src}:any)=>{
    return (
        <>
            <img src={src} alt="profile Picture" className="rounded-full w-8 h-8 object-cover ring-4 ring-white ml-[-10px]"/>
        </>
    )
}