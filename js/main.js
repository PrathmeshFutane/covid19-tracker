console.log('hi')

let app = angular.module('MyApp',[]);

app.controller('MyCtrl',($scope, $http)=>{
    $scope.flag = false;
    $scope.error_flag = false;
    $scope.title = 'Covid-19 Tracker';
    $scope.name = 'prathmesh futane';

    $scope.changeTitle = () =>{
        $scope.title = "this is new title"
    }

    $http.get('https://covid19.mathdro.id/api').then(response =>{
        console.log(response['data'])
        $scope.data = response['data'];
    },error =>{
        console.log(error)
    })

    $scope.search = () =>{
        $http.get(`https://covid19.mathdro.id/api/countries/${$scope.key_word}`).then(response =>{
            
            $scope.countryData = response['data']
            console.log($scope.countryData)
            $scope.flag = true;
        },error =>{
            console.log(error)
            $scope.error_flag = true;
            setTimeout(() => {
                $scope.error_flag = false;
            }, 1000);
        })
    }
})