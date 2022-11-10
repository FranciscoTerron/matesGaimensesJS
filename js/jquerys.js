$(document).ready(function () {

    // AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
    $('.category_list .category_item[category="all"]').addClass('itemActivo');

    // FILTRANDO PRODUCTOS  ============================================

    $('.category_item').click(function () {
        var catProduct = $(this).attr('category');
        console.log(catProduct);

        // AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
        $('.category_item').removeClass('itemActivo');
        $(this).addClass('itemActivo');

        // OCULTANDO PRODUCTOS =========================
        $('.producto-item').css('transform', 'scale(0)');
        function hideProduct() {
            $('.producto-item').hide();
        } setTimeout(hideProduct, 400);

        // MOSTRANDO PRODUCTOS =========================
        function showProduct() {
            $('.producto-item[category="' + catProduct + '"]').show();
            $('.producto-item[category="' + catProduct + '"]').css('transform', 'scale(1)');
        } setTimeout(showProduct, 400);
    });

    // MOSTRANDO TODOS LOS PRODUCTOS =======================

    $('.category_item[category="all"]').click(function () {
        function showAll() {
            $('.producto-item').show();
            $('.producto-item').css('transform', 'scale(1)');
        } setTimeout(showAll, 400);
    });
});