// MAPBOX
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import getCenter from 'geolib/es/getCenter'

import { useState } from 'react';

export default function Map({ mapNames, heading }: any) {

  const coordinates = mapNames?.map((item) => ({
    longitude: item.location.lng,
    latitude: item.location.lat
  }))

  const center = coordinates ? getCenter(coordinates) : { latitude: 40.7226811, longitude: -73.9982304 }

  const [viewport, setViewport] = useState({
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 15
  })

  const [marker, setMarker] = useState(null)

  const renderLocation = (item) => {
    setMarker(item)
    setViewport({
      latitude: item.location.lat,
      longitude: item.location.lng,
      zoom: 15
    })
  }

  return (
    <>
      <div className="section">
        <div className="container">
          {heading &&
            <>
              <h2 className="md:text-5xl text-3xl mb-10">{heading}</h2>
              <hr />
            </>
          }
          <div>
            <div>
              <div className="w-full md:h-[30rem]">
                <ReactMapGL
                  width="100%"
                  height="100%"
                  mapStyle="mapbox://styles/mapbox/light-v10"
                  mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
                  {...viewport}
                  onMove={evt => setViewport(evt.viewState)}
                >
                  {mapNames ?
                    mapNames?.map((item, i) => {
                      return (
                        <div key={i}>
                          <Marker
                            longitude={item.location.lng}
                            latitude={item.location.lat}
                            offset={[-20, -10]}
                          >
                            <div
                              className={`cursor-pointer ${item.isCondo ? 'animate-pulse' : ''}`}
                              onClick={() => renderLocation(item)}
                            >
                              <div className="w-6 h-6 hover:w-10 hover:h-10 hover:bg-[#6e7a6f] transition-all duration-150 ease-in-out bg-black rounded-full flex items-center justify-center text-white">{i++}</div>
                            </div>
                          </Marker>
                          {marker === item ?
                            <Popup
                              anchor="bottom-left"
                              latitude={item.location.lat}
                              longitude={item.location.lng}
                              offset={[-10, -30]}
                              closeButton={false}
                              closeOnClick={false}
                            >
                              <div className="flex flex-col">
                                <span className="text-black font-bold">{item.neighborhoodName}</span>
                                <span className="text-black">{item.category}</span>
                              </div>
                            </Popup>
                            : null}
                        </div>
                      )
                    })
                    : null}
                </ReactMapGL>
              </div>
            </div>
            {/* <div className="md:w-1/2 relative h-full overflow-auto py-4 md:py-0">
              {mapNames ?
                <ul className="h-full">
                  {mapNames.map((item, i) => {
                    return (
                      <li
                        key={i}
                        className={`content flex flex-col p-4 hover:bg-white/10 rounded-sm my-2 ${marker === item ? '' : 'hidden'}`}
                        onClick={() => renderLocation(item)}
                      >

                        <h2 className={`text-2xl`}>{item.neighborhoodName}</h2>
                        <div>
                          {item?.category && <span>{item.category}</span>}
                          {item?.subtitle && <span>{item.subtitle}</span>}
                        </div>
                      </li>
                    )
                  })}
                </ul>
                : null}
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}