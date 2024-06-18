export default function TestimonyCard(props){
    return (
        <div className="w-full flex flex-col px-8 py-4 border-4 border-orange-500 bg-orange-200">
            <p className="text-center">{props.comment}</p>
            <h3 className="text-sm font-bold text-right">{props.customerName}</h3>
        </div>
    )
}