const ShowBgCard = ({ItemData}) => {
    return (
        <div className="bg-white/0.1 backdrop-blur-xl size-full flex justify-center select-none">
            <img className="h-full !w-fit z-10" src={ItemData.bgLightCone} alt={ItemData.name} />
        </div>
    )
}

export default ShowBgCard
