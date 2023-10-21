const useFetch = async ( url, n ) => {
    const { id, name, username, email, address, } = await fetch( `${url}/${n}` );
    return [id, name, username, email, address];
};

export default useFetch;