const Dummy_Events = [
    {
        id: 'e1',
        title: 'Programming for everyone',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cum, dolor dolore et fugiat iusto, laudantium neque nostrum odit quod repellendus sed? Adipisci aliquid doloremque ea eos illo nulla quas quasi qui quis quos. Adipisci autem debitis, distinctio eaque facilis nobis praesentium quia quo, tempora temporibus tenetur totam. Aliquam animi dolorem eaque eligendi nam sint! Aperiam est expedita impedit repellendus vitae? Cumque eligendi exercitationem, expedita nemo nihil perferendis porro similique. Ab, consequuntur deserunt, ea earum, eius exercitationem fugiat harum hic in laboriosam minima optio porro quae quisquam tempora! Alias dolorum excepturi fuga fugit id ratione reprehenderit ut veniam voluptatibus.",
        location:"Somestreet 25,12345 San Somewhereo",
        date: '2021-05-12',
        image: 'images/1.jpg',
        isFeatured: true
    },
    {
        id: 'e2',
        title: 'Programming for everyone',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cum, dolor dolore et fugiat iusto, laudantium neque nostrum odit quod repellendus sed? Adipisci aliquid doloremque ea eos illo nulla quas quasi qui quis quos. Adipisci autem debitis, distinctio eaque facilis nobis praesentium quia quo, tempora temporibus tenetur totam. Aliquam animi dolorem eaque eligendi nam sint! Aperiam est expedita impedit repellendus vitae? Cumque eligendi exercitationem, expedita nemo nihil perferendis porro similique. Ab, consequuntur deserunt, ea earum, eius exercitationem fugiat harum hic in laboriosam minima optio porro quae quisquam tempora! Alias dolorum excepturi fuga fugit id ratione reprehenderit ut veniam voluptatibus.",
        location:"Somestreet 25,12345 San Somewhereo",
        date: '2021-05-30',
        image: 'images/2.jpg',
        isFeatured: true
    },
    {
        id: 'e3',
        title: 'Programming for everyone',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cum, dolor dolore et fugiat iusto, laudantium neque nostrum odit quod repellendus sed? Adipisci aliquid doloremque ea eos illo nulla quas quasi qui quis quos. Adipisci autem debitis, distinctio eaque facilis nobis praesentium quia quo, tempora temporibus tenetur totam. Aliquam animi dolorem eaque eligendi nam sint! Aperiam est expedita impedit repellendus vitae? Cumque eligendi exercitationem, expedita nemo nihil perferendis porro similique. Ab, consequuntur deserunt, ea earum, eius exercitationem fugiat harum hic in laboriosam minima optio porro quae quisquam tempora! Alias dolorum excepturi fuga fugit id ratione reprehenderit ut veniam voluptatibus.",
        location:"New Wall Street 5, 98765 New Work",
        date: '2021-05-30',
        image: 'images/3.jpg',
        isFeatured: false
    }
]


export function getFeatureEvents(){
    return Dummy_Events.filter((event) => event.isFeatured)
}

export  function  getAllEvents(){
    return Dummy_Events;
}

export function getFilteredEvents(dateFilter) {
    const {year, month} = dateFilter;

    let filteredEvents = Dummy_Events.filter((event) =>{
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    })

    return filteredEvents
}

export function getEventById(id) {
    return Dummy_Events.find((event) => event.id === id);
}