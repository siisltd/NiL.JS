try {
    true instanceof true;
    $ERROR('#1: true instanceof true throw TypeError');
}
catch (e) {
    if (e instanceof TypeError !== true) {
        $ERROR('#1: true instanceof true throw TypeError');
    }
}