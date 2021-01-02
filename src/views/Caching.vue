<template>
  <div class="caching">
    <v-row align="center" justify="center">
      <v-col cols="12" md="8" sm="8">
        <h1 class="text-h1">{{ $t("caching.blame") }}</h1>
      </v-col>
      <v-col cols="12" md="8" sm="8">
        <i18n path="caching.description" tag="p"> 
            <a href="https://shouldiblamecaching.com" target="_blank">{{$t("caching.link_site")}}</a>
            <a href="https://github.com/tms/shouldiblamecaching.com" target="_blank">{{$t("caching.link_repo")}}</a>
        </i18n>
      </v-col>
    </v-row>
  </div>
</template>