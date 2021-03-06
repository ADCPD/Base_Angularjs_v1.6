/**
 * Created by dhaouadi_a on 13/12/2016.
 */
/**
 * Created by dhaouadi_a on 13/12/2016.
 */


var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {templateUrl: './vue/home.html', controller: 'PostCtrl'})   // defenir les routes
        .when('/comments/:id', {templateUrl: './vue/comments.html', controller: 'CommentCtrl'}) //definir quel controle gere la vue
        .otherwise({redirectTo: '/'}); //s'il  ne trouve pas plus d'url, il se redirige vers la page index
});


app.service('Post', function () {

    this.posts = [
        {
            "comments": [
                {
                    "email": "undefined@undefined.name",
                    "content": "Magna fugiat amet aliqua sunt eu consectetur reprehenderit mollit. Aliqua cillum laborum deserunt sunt eiusmod consequat laboris ad adipisicing fugiat ut. Lorem occaecat proident est ipsum est ex officia laboris tempor dolor. Deserunt sunt non magna anim esse magna. Non laborum duis est eu consequat magna.",
                    "city": "Belmont",
                    "username": "Callahan"
                },
                {
                    "email": "undefined@undefined.org",
                    "content": "Officia dolore laborum velit id. Magna laboris exercitation officia aliquip et commodo reprehenderit anim adipisicing eu mollit adipisicing fugiat. Enim ex Lorem et cillum ea ipsum pariatur quis ea excepteur officia dolore Lorem. Nostrud deserunt est veniam tempor velit fugiat adipisicing. Excepteur aliquip do consequat eu exercitation aliqua sunt do.",
                    "city": "Ilchester",
                    "username": "Curtis"
                },
                {
                    "email": "undefined@undefined.net",
                    "content": "Sit ad qui cupidatat dolore sit magna velit cillum consectetur amet fugiat pariatur. Excepteur non exercitation reprehenderit qui exercitation. Reprehenderit esse exercitation est eu eu dolor cupidatat ullamco enim. Voluptate deserunt aliqua esse non nostrud et anim elit do dolore ipsum minim anim. Irure aliquip dolor et nostrud occaecat pariatur.",
                    "city": "Como",
                    "username": "Singleton"
                }
            ],
            "content": "Lorem Lorem laboris dolore incididunt. Adipisicing do enim ipsum esse nulla. Ut sit do Lorem do aliquip ex aliqua laborum consequat ex. Mollit consequat anim nisi laboris ullamco proident ipsum ex Lorem. Esse fugiat aliqua ullamco veniam in proident do reprehenderit velit ad exercitation laboris laborum.",
            "company": "ZINCA",
            "id": 8
        },
        {
            "comments": [
                {
                    "email": "undefined@undefined.us",
                    "content": "Exercitation et Lorem in sunt reprehenderit pariatur est. Nisi eu exercitation sit sit anim adipisicing. Adipisicing sint excepteur ipsum id. In et fugiat ex veniam magna commodo pariatur. Proident aliquip cupidatat non mollit proident proident deserunt esse.",
                    "city": "Loretto",
                    "username": "Washington"
                }
            ],
            "content": "Commodo id enim labore proident sint sit pariatur incididunt qui aute minim. Pariatur nisi esse voluptate enim id id aliqua veniam non ut. Enim sint enim excepteur nulla cupidatat nulla. Esse labore veniam laboris duis nostrud aliquip sit non duis nulla eiusmod minim. Deserunt officia adipisicing anim eu ex qui commodo excepteur.",
            "company": "BIOLIVE",
            "id": 10
        },
        {
            "comments": [
                {
                    "email": "undefined@undefined.com",
                    "content": "Anim aliquip in Lorem elit nulla dolore sint cupidatat dolor consequat ea cupidatat do. Incididunt enim esse aute amet et ipsum fugiat voluptate nulla sint. Dolore veniam ex eiusmod anim aute ipsum eiusmod eiusmod laboris adipisicing anim eiusmod occaecat veniam. Duis incididunt exercitation fugiat qui. Aliqua nisi duis veniam sunt dolor eu nostrud.",
                    "city": "Noblestown",
                    "username": "Galloway"
                },
                {
                    "email": "undefined@undefined.tv",
                    "content": "Aliquip adipisicing excepteur adipisicing elit mollit ad occaecat eu dolor consectetur ex. Laboris reprehenderit Lorem fugiat excepteur aute anim. Est quis sit dolor eiusmod. Anim est minim qui fugiat. Cillum consequat qui fugiat culpa minim cillum irure.",
                    "city": "Sunnyside",
                    "username": "Chang"
                },
                {
                    "email": "undefined@undefined.biz",
                    "content": "Do ipsum eu ipsum aliqua nulla officia magna. Adipisicing adipisicing velit adipisicing non sit sunt commodo eiusmod. Consectetur dolor tempor excepteur exercitation anim proident aute esse ut incididunt ullamco anim et. Enim veniam consectetur ullamco ea aliquip ea et. Ut occaecat incididunt non in cillum pariatur et proident nulla proident sint.",
                    "city": "Otranto",
                    "username": "Barrera"
                }
            ],
            "content": "Sint Lorem cupidatat deserunt duis mollit enim qui anim aliquip sunt eu minim velit elit. Fugiat culpa commodo pariatur magna amet culpa ea nulla aliqua esse quis exercitation sunt. Elit sint nostrud elit ullamco quis sint commodo pariatur. Dolore id quis exercitation fugiat enim nulla duis. Non dolore ipsum quis et excepteur veniam Lorem reprehenderit.",
            "company": "SPACEWAX",
            "id": 7
        },
        {
            "comments": [
                {
                    "email": "undefined@undefined.me",
                    "content": "Sunt pariatur qui adipisicing laboris voluptate. Proident consequat ad sit exercitation ex commodo nostrud non et mollit commodo Lorem laborum. Aliquip aliquip fugiat exercitation sunt. Officia nostrud occaecat elit dolor et qui cillum ea aute aliquip nisi et. Quis officia culpa proident officia cillum laborum pariatur duis ut ad dolor veniam sunt pariatur.",
                    "city": "Ticonderoga",
                    "username": "Bush"
                },
                {
                    "email": "undefined@undefined.io",
                    "content": "Enim do commodo excepteur ullamco incididunt laboris enim cupidatat adipisicing laborum. Esse in fugiat pariatur nostrud commodo proident anim ex. Adipisicing veniam quis eu laboris aute nisi voluptate consequat. Id consectetur et laboris aliqua labore aliquip. Non id laboris labore voluptate deserunt esse deserunt consequat ullamco.",
                    "city": "Williamson",
                    "username": "Garner"
                }
            ],
            "content": "Magna nisi elit consequat nostrud occaecat aliquip occaecat excepteur cupidatat. Duis elit excepteur occaecat velit minim amet. Aliquip Lorem aliquip in velit cillum. Ut est non occaecat aliqua mollit irure. Consectetur sit voluptate cillum dolore ea esse ad enim et.",
            "company": "NEXGENE",
            "id": 2
        },
        {
            "comments": [
                {
                    "email": "undefined@undefined.ca",
                    "content": "Esse veniam irure laboris est id minim occaecat pariatur ullamco non duis irure do velit. Commodo fugiat nulla irure culpa. Veniam laboris laborum quis proident Lorem cillum nulla eu deserunt id aute velit. Cillum deserunt anim amet veniam excepteur veniam. Commodo Lorem fugiat id quis proident do sunt aute nisi incididunt ea nulla.",
                    "city": "Barclay",
                    "username": "Hamilton"
                }
            ],
            "content": "Est proident Lorem adipisicing culpa ut eiusmod. Non excepteur eu sunt cupidatat est dolore. In enim ad laboris irure ipsum cillum reprehenderit magna voluptate amet dolor incididunt magna. Deserunt dolore ad aute reprehenderit reprehenderit adipisicing mollit nulla deserunt nisi elit voluptate sunt ad. Lorem aliquip consectetur occaecat sit sit ipsum excepteur nisi pariatur officia.",
            "company": "CANOPOLY",
            "id": 2
        }
    ];

    // method qui recupere les differents articles
    this.getPosts = function () {
        return this.posts;
    };

    // recuprere l'article par id show page
    this.getPost = function (id) {
        var post = {};
        angular.forEach(this.posts, function (value, key) {
            if (value.id == id) {
                post = value;
            }
        });
        return post;
    }
});


app.controller('PostCtrl', function ($scope, Post) {
    $scope.posts = Post.getPosts();

});

app.controller('CommentCtrl', function ($scope, Post, $routeParams) {
    $scope.$routeParams = $routeParams;
    var post = Post.getPost($scope.$routeParams.id);
    $scope.title = post.name;
    $scope.comments = post.comments;
});

