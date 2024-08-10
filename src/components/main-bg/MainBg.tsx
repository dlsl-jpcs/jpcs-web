import './MainBg.css'

function MainBg() {
    return (
        <>
            <div className="bg-body">
                <div id="container">

                    {
                        [...Array(1599)].map((_, i) => {
                            return (
                                <div key={i} className="tile"></div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default MainBg;