import { AiFillFilePdf } from "react-icons/ai"
import { urlForImage } from '../../lib/sanity'
import Styles from '../../styles/templates.module.css'

export default function AvailabilityTable({
    availabilities,
    Bath,
    intExtSf,
    exposure,
    price,
    cc,
    retax,
    listingStatus,
    viewListing,
    file,
    image,
    residence
}: any) {
    return (
        <div className="section">
            <div className="md:p-10 p-4" style={{
                background: 'hsl(0deg 0% 100% / 85%)'
            }}>
                <div className="container">
                    <table className={`border-collapse table-auto w-full text-center availability hidden md:table ${Styles.availabilityTable}`}>
                        <thead>
                            <tr className="uppercase">
                                <th>Residence</th>
                                <th>Bath</th>
                                <th>INT / EXT SF</th>
                                <th>Exposure</th>
                                <th>Price</th>
                                <th>CC</th>
                                <th>Re Tax</th>
                                <th>Status</th>
                                <th>Floor Plan</th>
                            </tr>
                        </thead>
                        <tbody>

                            {availabilities.avail.map((node, i) => {
                                return (
                                    <tr>
                                        {node?.residence ? <td>{node?.residence}</td> : <td>—</td>}
                                        {node?.bedBath ? <td>{node?.bedBath}</td> : <td>—</td>}
                                        {node?.intExtSf ? <td>{node?.intExtSf}</td> : <td>—</td>}
                                        {node?.exposure ? <td>{node?.exposure}</td> : <td>—</td>}
                                        {node?.price ? <td>{node?.price}</td> : <td>—</td>}
                                        {node?.cc ? <td>{node?.cc}</td> : <td>—</td>}
                                        {node?.retax ? <td>{node?.retax}</td> : <td>—</td>}
                                        {node?.status ? <td>{node?.status}</td> : <td>—</td>}
                                        {/* {node?.viewListing ? <td><a href={node?.viewListing} target="_blank" rel="noreferrer">VIEW</a></td> : <td>—</td>} */}
                                        {node?.file || node?.image ?
                                            <td>
                                                {node?.file && <a href={file} target="_blank" rel="noreferrer" className="flex justify-center" title={`View floor plans for ${residence}`}><AiFillFilePdf /></a>}
                                                {node?.image && <a href={urlForImage(node?.image).url()} target="_blank" rel="noreferrer" className="flex justify-center" title={`View floor plans for ${residence}`}><AiFillFilePdf className="text-2xl" /></a>}
                                            </td>
                                            : <td>—</td>
                                        }
                                    </tr>
                                )
                            })}
                        </tbody>

                    </table>
                </div>



                <div className="md:hidden pb-10">
                    {availabilities.avail.map((node) => {
                        return (
                            <div className="bg-gray-100 p-4 mt-10" key={node._key}>
                                {node.residence ? <h3 className="text-2xl">{node.residence}</h3> : <h3 className="text-2xl">-</h3>}
                                <div className="border-t pt-4 mt-4">
                                    <div className="grid grid-cols-2 mobile-availability">
                                        {node.bedBath ? <div className="p-2"><span>Bed/Bath</span><p>{node.bedBath}</p></div> : <></>}
                                        {node.intExtSf ? <div className="p-2"><span>Int/Ext SF</span><p>{node.intExtSf}</p></div> : <></>}
                                        {node.terrace ? <div className="p-2"><span>Terrace</span><p>{node.terrace}</p></div> : <></>}
                                        {node.price ? <div className="p-2"><span>Price</span><p>{node.price}</p></div> : <></>}
                                        {node.cc ? <div className="p-2"><span>ESTIMATED MONTHLY CC</span><p>{node.cc}</p></div> : <></>}
                                        {node.retax ? <div className="p-2"><span>Estimated Monthly Re Tax</span><p>{node.retax}</p></div> : <></>}
                                        {node.status ? <div className="p-2"><span>Status</span><p>{node.status}</p></div> : <></>}
                                        {node.viewListing ? <div className="p-2"><p>Listing</p><a href={node.viewListing} target="_blank" rel="noreferrer">VIEW</a></div> : <></>}
                                        {node.file || node.image ?
                                            <div className="p-2">
                                                <span>Floor plan</span>
                                                <div>
                                                    {node.file && <a href={node.file.asset.url} className="block" target="_blank" rel="noreferrer">Floor Plan</a>}
                                                    {node.image && <a href={urlForImage(node.image).url()} target="_blank" rel="noreferrer"><AiFillFilePdf className="text-xl" /></a>}
                                                </div>

                                            </div>
                                            :
                                            <div className="p-2">-</div>}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}