


function Spinner(){
    
    return(
            <div className="d-flex flex-column align-items-center justify-content-center myspinner">

                <div className="mt-2">
                    <h5> Loading...</h5>
                </div>

                <div className="d-flex ">
                    <div class="ms-0 text-head spinner-grow d-flex align-items-center justify-content-center " style={{width: "1rem", height: "1rem"}} role="status">
                    </div>
                    <div class="ms-2 text-head spinner-grow d-flex align-items-center justify-content-center " style={{width: "1rem", height: "1rem"}} role="status">
                    </div>
                    <div class="ms-2 text-head spinner-grow d-flex align-items-center justify-content-center " style={{width: "1rem", height: "1rem"}} role="status">
                    </div>
                    <div class="ms-2 text-head spinner-grow d-flex align-items-center justify-content-center " style={{width: "1rem", height: "1rem"}} role="status">
                    </div>
                    <div class="ms-2 text-head spinner-grow d-flex align-items-center justify-content-center " style={{width: "1rem", height: "1rem"}} role="status">
                    </div>
                </div>
            </div>
    )
}

export default Spinner;