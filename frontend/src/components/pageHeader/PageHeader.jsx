import "./PageHeader.css"

const PageHeader = () => {

    return (
        <div className="page-header">
            <div className="container">
                <div className="page-header-content flex flex-row items-center space-between">
                    <div className="page-header-left">
                        <h1>
                            This is a sample UI platform designed exclusively for testing and demo.
                        </h1>
                    </div>
                    <div className="page-header-right">
                        <a href="#">
                            Get Source Code
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageHeader