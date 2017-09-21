trainApp.controller("searchController",function($scope,$http)
                    {

    console.log("controller loaded");

    $scope.Train={};
    $scope.TrainArray=[];

    var failure=function(resp)
    {
        console.log("called failure")
        console.log(resp);

    }   

    $scope.searchNumber=function()
    {
        console.log("searched Number")

        var reqNumber={
            method:"get",
            url:"https://api.railwayapi.com/v2/suggest-train/train/"+$scope.Train.searchNumber+"/apikey/k9ef9ek6fi",
            cache:false
           
        };

        var successNumber=function(resp)
        {
            console.log("called success");
            console.log(resp);  
            console.log(resp.data); 
            console.log(resp.data.train); 

            $scope.name=resp.data.trains;

        }

        $http(reqNumber).then(successNumber,failure);

    }


    $scope.searchTime=function(nm)
    {
        console.log("searched Time");
        console.log(nm);

        var req={
             method:"get",
            url:"https://api.railwayapi.com/v2/route/train/"+nm+"/apikey/k9ef9ek6fi/",
         cache:false
        };

        var successTime=function success(resp)
        {
            console.log("called success");
            console.log(resp);  
            console.log(resp.data); 
            console.log(resp.data.train); 
            console.log(resp.data.train.name); 
            console.log(resp.data.train.days);

            $scope.nm=resp.data.train.name;
            $scope.num=resp.data.train.number;

            $scope.day=resp.data.train.days;
            $scope.route=resp.data.route;


        }

        $http(req).then(successTime,failure);
    }

    $scope.clear=function()
    {
        console.clear();
        console.log("cleared")
    }

    console.log("controller ended");


});
