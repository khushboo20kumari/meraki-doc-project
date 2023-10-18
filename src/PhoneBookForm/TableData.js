
function TableData({table}) {
    // console.log(TableData)
    return (
        <>

            <div style={{ width: "30%", margin: "auto", textAlign: "center", marginTop: "80px" }}>
                <table border="1" style={{ width: "100%" }}>
                    <thead>

                        <tr>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Phone</th>
                        </tr>

                    </thead>
                    <tbody>

                        {table.map((item, index) => (

                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.lastName}</td>
                                <td>{item.phone}</td>
                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>
        </>
    )
}
export default TableData;