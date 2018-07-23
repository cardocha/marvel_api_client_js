class HeroController
{
  showHeros(rootElement){

    let charactersRequest = new ApiRequest({
        apikey: Global.apikey,
        hash: Global.hash,
        ts: Global.ts
    });
    charactersRequest.execute(Request.GET, Global.charactersUrl, function (response) {
        let heros = new ApiResponse(response).parse(Response.HEROS_REQUEST);
        let htmlHeros = "";
        heros.forEach(function(heroInfo){
           const hero = new Hero(heroInfo);
           htmlHeros+= hero.show();
        });
        rootElement.innerHTML = htmlHeros;
    });

  }
}
