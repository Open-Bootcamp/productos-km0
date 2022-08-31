import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useState, useRef } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE, Callout } from 'react-native-maps'

const Mapa = () => {
  const { width, height } = Dimensions.get('window')
  const [origin, setOrigin] = useState({
    LATITUDE: 40.4671524,
    LONGITUDE: -4.0788262
  })
  let _map = useRef()
  const ASPECT_RATIO = width / height
  const LATITUDE_DELTA = 0.0922
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
  const SPACE = 0.01
  const markerIDs = ['Marker1', 'Marker2', 'Marker3']
  const [makers, setMakers] = useState([
    {
      title: 'Granja la esperanza 3',
      latitude: origin.LATITUDE + SPACE,
      longitude: origin.LONGITUDE + SPACE
    },
    {
      title: 'Granja la esperanza 1',
      latitude: origin.LATITUDE - SPACE,
      longitude: origin.LONGITUDE - SPACE
    },
    {
      title: 'Granja la esperanza 2',
      latitude: origin.LATITUDE - SPACE * 2,
      longitude: origin.LONGITUDE - SPACE * 2
    }
  ])

  return (
    <View style={styles.container}>
      <MapView
        ref={_map}
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: origin.LATITUDE,
          longitude: origin.LONGITUDE,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04
        }}
        showsUserLocation
        zoomEnabled={true}
        scrollEnabled={true}
        rotateEnabled={true}
        mapType="standard"
        //onLayout={() => { _map.showCallout() }}
      >
        {
          makers.map((marker, i) => {
            return(
              <React.Fragment key={Math.random()}>
                <Marker
                  coordinate={{
                    latitude: marker.latitude,
                    longitude: marker.longitude
                  }}
                  flat={true}
                  ref={ref => { _map = ref }}
                >
                    <Callout
                      tooltip={false}
                      style={{ backgroundColor: '#FFFFFF' }}
                    >
                      <Text>{marker.title}</Text>
                    </Callout>
                  </Marker>
              </React.Fragment>
            )
          })
        }
        {/* markers && markers.map(marker => (
        <>
          <Marker
          coordinate={marker.latlng}
          description={marker.description}
          />
        </>
        )) */}
      </MapView>
    </View>
  )
}

export default Mapa

const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundCoor: 'gray',
    // padding: 18,
    // justifyContent: 'center',
    // alignItems: 'center'
  }
})
