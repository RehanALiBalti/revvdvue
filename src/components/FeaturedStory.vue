<!-- src/components/FeaturedStoryPage.vue -->
<template>
    <div class="container my-5">
        <!-- Story Details Section -->
        <div class="p-2 mb-4 text-white">
            <div class="text-center">
                <h2>{{ story.title }}</h2>
            </div>
            <div class="card-body">
                <p>{{ story.content }}</p>
                <p><strong>Modifications:</strong> {{ story.modifications }}</p>
                <p><strong>Memorable Story:</strong> {{ story.memorableStory }}</p>
                <p><strong>Advice:</strong> {{ story.advice }}</p>
                <div v-if="story.images.length">
                    <h5>Images</h5>
                    <div class="row">
                        <div v-for="(image, index) in story.images" :key="index" class="col-md-3">
                            <img :src="image" class="img-fluid" alt="Car Image">
                        </div>
                    </div>
                </div>
                <div v-if="story.socialLinks">
                    <h5>Social Media Links</h5>
                    <p>{{ story.socialLinks }}</p>
                </div>
            </div>
        </div>

        <!-- Car Filters Section -->
        <div class="mb-4 text-white">
            <h4>Filter Stories</h4>
            <div class="row g-3">
                <div class="col-md-4">
                    <select v-model="filters.make" class="form-select" @change="filterStories">
                        <option value="">Select Make</option>
                        <option v-for="make in makes" :key="make" :value="make">{{ make }}</option>
                    </select>
                </div>
                <div class="col-md-4">
                    <select v-model="filters.model" class="form-select" @change="filterStories">
                        <option value="">Select Model</option>
                        <option v-for="model in models" :key="model" :value="model">{{ model }}</option>
                    </select>
                </div>
                <div class="col-md-4 text-white">
                    <select v-model="filters.year" class="form-select" @change="filterStories">
                        <option value="">Select Year</option>
                        <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                    </select>
                </div>
            </div>
        </div>

        <!-- Stories Listing Section -->
        <div class="text-white ">
            <h4>Stories</h4>
            <div class="list-group bg-transparent">
                <a v-for="story in filteredStories" :key="story.id" href="#"
                    class="list-group-item list-group-item-action" @click.prevent="selectStory(story)">
                    <h5 class="mb-1">{{ story.title }}</h5>
                    <p class="mb-1">{{ story.summary }}</p>
                    <small>{{ story.date }}</small>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            story: {
                title: 'My Amazing Car Story',
                content: 'This is the detailed story of my amazing car. It all started when I...',
                modifications: 'Added a turbocharger, new suspension, and custom exhaust.',
                memorableStory: 'I drove it across the country without any issues, it was an unforgettable experience!',
                advice: 'Start small and plan your modifications. Research thoroughly before making changes.',
                images: [
                    'https://via.placeholder.com/150',
                    'https://via.placeholder.com/150'
                ],
                socialLinks: 'https://instagram.com/mycar',
            },
            filters: {
                make: '',
                model: '',
                year: ''
            },
            makes: ['Toyota', 'Honda', 'Ford'],
            models: ['Corolla', 'Civic', 'Mustang'],
            years: ['2020', '2019', '2018'],
            stories: [
                { id: 1, title: 'Story 1', summary: 'Summary of story 1...', date: '2024-05-01', make: 'Toyota', model: 'Corolla', year: '2020' },
                { id: 2, title: 'Story 2', summary: 'Summary of story 2...', date: '2024-04-15', make: 'Honda', model: 'Civic', year: '2019' },
                { id: 3, title: 'Story 3', summary: 'Summary of story 3...', date: '2024-03-20', make: 'Ford', model: 'Mustang', year: '2018' },
                // More stories here...
            ],
            filteredStories: []
        };
    },
    mounted() {
        this.filteredStories = this.stories;
    },
    methods: {
        filterStories() {
            this.filteredStories = this.stories.filter(story => {
                return (
                    (this.filters.make === '' || story.make === this.filters.make) &&
                    (this.filters.model === '' || story.model === this.filters.model) &&
                    (this.filters.year === '' || story.year === this.filters.year)
                );
            });
        },
        selectStory(story) {
            this.story = story;
            window.scrollTo(0, 0);
        }
    }
};
</script>

<style scoped>
.card-header {
    background-color: #f8f9fa;
}

.card-content-car h4 {
    font-size: 26px
}

.card-content-car p {
    font-size: 14px
}
</style>