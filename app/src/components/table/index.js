export function Table() {
    return (
        <>
            <table className="min-w-full tableSpacing">
                <thead className="">
                    <tr>
                        <th className="border-b text-sm font-medium text-gray-900">Song</th>
                        <th className="border-b text-sm font-medium text-gray-900">Artist</th>
                        <th className="border-b text-sm font-medium text-gray-900">Year</th>
                    </tr>
                </thead>
                <tbody className="">
                    <tr className="drop-shadow-md">
                        <td className="text-center">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td className="text-center">Malcolm Lockyer</td>
                        <td className="text-center">1961</td>
                    </tr>
                    <tr className="drop-shadow-md">
                        <td className="text-center">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td className="text-center">Malcolm Lockyexr</td>
                        <td className="text-center">1961</td>
                    </tr>
                    
                </tbody>
            </table>
        </>
    )
}