class PostService {
    constructor() {
        this.posts = [
            {
                id: 1,
                image: 'https://res.cloudinary.com/dek86juo8/image/upload/v1700354220/markus-spiske-oXS1f0uZYV4-unsplash_kpgfou.jpg',
                title: "Basketball 3x3 Tournament",
                description: "Immerse yourself in the sporting thrill of our 3x3 basketball tournament. Showcase your skills on the court and compete for exciting prizes. No limits, just pure action!",
                category: "Sports",
                favorite: true
            },
            {
                id: 2,
                image: 'https://res.cloudinary.com/dek86juo8/image/upload/v1700354219/jon-flobrant-_r19nfvS3wY-unsplash_t0rsh2.jpg',
                title: "Hiking Adventure",
                description: "Explore nature in our thrilling hiking event. Discover breathtaking landscapes, connect with the outdoors, and enjoy an active day in the fresh air. Adventure awaits!",
                category: "Outdoors",
                favorite: false
            },
            {
                id: 3,
                image: 'https://res.cloudinary.com/dek86juo8/image/upload/v1700354219/victoria-shes-UC0HZdUitWY-unsplash_mozspc.jpg',
                title: "Gastronomic Festival",
                description: "Embark on a culinary journey at our food festival. Delight in a variety of exquisite dishes and irresistible desserts. Flavors that awaken the senses!",
                category: "Food",
                favorite: true
            },
            {
                id: 4,
                image: 'https://res.cloudinary.com/dek86juo8/image/upload/v1700354219/nathan-dumlao-P5MXtYfgmmw-unsplash_m7ecjy.jpg',
                title: "Kids Fun Day",
                description: "Celebrate the joy of childhood at our dedicated kids' event. Games, creative activities, and laughter guaranteed. A space where children's happiness shines bright!",
                category: "Kids",
                favorite: true
            },
            {
                id: 5,
                image: 'https://res.cloudinary.com/dek86juo8/image/upload/v1700354219/victoria-shes-UC0HZdUitWY-unsplash_mozspc.jpg',
                title: "Gastronomic Festival",
                description: "Embark on a culinary journey at our food festival. Delight in a variety of exquisite dishes and irresistible desserts. Flavors that awaken the senses!",
                category: "Food",
                favorite: false
            },
            {
                id: 6,
                image: 'https://res.cloudinary.com/dek86juo8/image/upload/v1700354219/nathan-dumlao-P5MXtYfgmmw-unsplash_m7ecjy.jpg',
                title: "Kids Fun Day",
                description: "Celebrate the joy of childhood at our dedicated kids' event. Games, creative activities, and laughter guaranteed. A space where children's happiness shines bright!",
                category: "Kids",
                favorite: false
            }
        ]
    }

    getPosts() {
        return this.posts;
    }

    getPostById(id) {
        return this.posts.find(post => post.id === parseInt(id, 10));
    }

    getPostsByCategory(category) {
        const lowerCaseCategory = category.toLowerCase();
        const filteredPosts = this.posts.filter(post => post.category.toLowerCase() === lowerCaseCategory);
        return filteredPosts;
    }

}

export default new PostService();
