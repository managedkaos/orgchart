<script lang="ts">
    import { onMount } from "svelte";
    let users = []

    onMount(async () => {
      const url = "http://localhost:30001/api/users"

      const response = await fetch(url)
      const body = await response.json()
      users = body.body.org_chart.peers
    })
</script>

<section>
    Happy happy joy joy

    <ul>
      {#each users as user}
        <li>
          {user.full_name}
        </li>
      {/each}
    </ul>
</section>