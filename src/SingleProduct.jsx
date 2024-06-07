

const SingleProduct = ({props, handleAddCart}) => {
    const {title, price, image} = props
    return (
        <div>
            <div className="w-80 border-green-600 border-2 m-6 p-5 rounded-xl text-center space-y-3 ">
                <div className="flex items-center justify-center">
                    <img className="w-24" src={image} alt="" />
                </div>
                <h1 className="font-bold text-xl">{title}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, dicta!</p>
                <div className="flex justify-between items-center">
                    <h3 className="font-bold text-lg">Price: {price}</h3>
                    <button onClick={()=>handleAddCart(props)} className="font-bold border-2 p-2 rounded-lg">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;