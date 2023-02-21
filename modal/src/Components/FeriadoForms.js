
function FeriadoForms() {
    return (
        <form action="/action_page.php" method="get|post" className="flex flex-col mt-4 items-center">
            <label for="fname" className="font-bold">First name:</label>
            <input
                type="text" id="fname" 
                name="fname" value="John"
                className="border-2 rounded-md p-1 pl-2 w-2/4 text-black" />
            <label for="lname" className="font-bold">Last name:</label>
            <input 
                type="text" id="lname" 
                name="lname" value="Doe"
                className="border-2 rounded-md p-1 pl-2 w-2/4"
            ></input>
            <input 
                type="submit" value="Submit"
                className="mt-4 mb-2 w-1/4 px-[0.5rem] py-[0.2rem] text-base text-lime-600 bg-white hover:text-white hover:bg-lime-600 border-[0.1rem] border-lime-600 rounded cursor-pointer transition-all ease duration-30" 
                />
        </form>
    )
}

export default FeriadoForms;