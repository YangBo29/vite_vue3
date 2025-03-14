<template>
    <div :class="styles.content">
        <h1>User Page</h1>
        <p>User ID: {{ $route.params.id }}</p>
        <p>Query Params: {{ $route.query }}</p>
    </div>
</template>

<script>
import styles from './user.module.scss';

export default {
    name: 'User',
    data() {
        return {
            styles,
        };
    },
};
</script>
