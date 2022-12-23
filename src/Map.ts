interface ActorLocation {
    location: {
        lat: number,
        lng: number
    };
    markerContent(): string;
}

export class Map {
    private googleMap: google.maps.Map

    constructor(devID: string) {
        this.googleMap = new google.maps.Map(document.getElementById(devID) as HTMLElement, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        })
    }

    addMarker(actor: ActorLocation): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: actor.location.lat,
                lng: actor.location.lng
            }
        })

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: actor.markerContent()
            })
            infoWindow.open(this.googleMap, marker)
        })
    }
}