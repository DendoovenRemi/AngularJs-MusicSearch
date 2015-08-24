angular.module('musicApp',[])
	
	//Affiche le nombre d'étoile d'un album
	.filter('reverse',function () {
        return function (items) {
            if (!items) {
                return items;
            }
            return items.slice().reverse();
        };
    })

	//Affiche le style de music (pop-rock-blues...)
	.filter('joinBy',function () {
        return function (input, delimiter) {
            return (input || []).join(delimiter || ', ');
        };
    })

	//Affiche la langue chantée du groupe
    .filter('artistTypeLabel', ['$rootScope', function ($rootScope) {
        return function (input) {
            return $rootScope.translation['ARTIST_TYPE_' + input];
        };
    }])

    //Affiche la date de sortie de l'album
    .filter('yearFormat', ['$rootScope', function ($rootScope) {
        return function (range) {
            if (range.from === undefined) {
                return $rootScope.translation.FILTER_RELEASE_DATE_BEFORE + ' ' + range.to;
            }
            if (range.to === undefined) {
                return $rootScope.translation.FILTER_RELEASE_DATE_SINCE + ' ' + range.from;
            }
            if (range.from < 2000) {
                return $rootScope.translation.FILTER_RELEASE_DATE_YEAR + ' ' + (range.from - 1900);
            }
            return $rootScope.translation.FILTER_RELEASE_DATE_YEAR + ' ' + range.from;
        };
    }]);