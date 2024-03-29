<template>
    <div class="container">
        <ul>
            <li @click="toggleDropdown">GENERAL TERMS
                <div v-if="showDropdown">
                <p>From herein, the entity “Dakkii” will be referred to as “The Artist” or “Artist” and the client
                    entity will referred to as “The Commissioner” or “Commissioner.”</p>
                <p>All produced works will include the Artist’s signature or logo and links to their website, E-mail,
                    and Patreon page. The Commissioner is not allowed to remove any of these elements. The signature
                    enables the Artist’s produced work to be identifiable for promotion. It prevents it from being
                    illegally distributed in any way, shape, or form by anyone - including the Commissioner without
                    proper credit.</p>
                <p>The Commissioner can send their commission application by submitting one through Artistree. The
                    Artist will review each request and choose the ones they wish to accept. The Artist retains the
                    right to ignore or decline any Commission Request sent or discussed before payment. After payment,
                    the Artist can still refuse, but the Commissioner will be refunded an amount dependent on the
                    situation (see VII. CUSTOMER SATISFACTION for more information). </p>
                <p>When all Commission Slots for the Commission Period are full, Commissions will immediately close, and
                    the Artist will discard all other rejected or ignored requests. There may be times when Commissions
                    are open indefinitely.</p>
                <p>The Artist will only accept one (1) Commission Request per Commissioner. Comic Pages are the only
                    exception if more than one page is requested.</p>
                <p>The Artist will reach out to the Commissioner through the E-Mail they provided if their request is
                    accepted. The Artist will then continue communicating through Discord or Twitter DMs. The
                    Commissioner must have access to either of these accounts to continue communication after acceptance
                    of their request. If the Commissioner has neither of these accounts, further communication will
                    continue through E-Mail. </p>
                <p>The Commissioner must provide adequate references for the work they would like produced. A minimum of
                    one (1) of these pieces is required, but supplying more than one reference is encouraged. </p>
                <p>The Commissioner may send image links in the appropriate fields while making their request or send
                    the Artist more references after acceptance of their request through Twitter DMs, Discord, or via
                    E-Mail.</p>
                </div>
            </li>
            <li>DO'S AND DON'T'S</li>
        </ul>
    </div>
</template>
<script>
export default {
  data() {
    return {
      showDropdown: false
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    }
  }
};
</script>
<style scoped>

li {
    list-style:none;
}

</style>