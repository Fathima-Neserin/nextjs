type ProfileProps = {
    name: string,
    role: string
}

export default function Profile({name, role}: ProfileProps){
    return(
        <div>
            <h1>{name}</h1>
            <p>{role}</p>
        </div>
    )
} 