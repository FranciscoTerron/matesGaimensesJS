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

        $('.producto-item').hide();


        // MOSTRANDO PRODUCTOS =========================
        $('.producto-item[category="' + catProduct + '"]').show();
    });

    // MOSTRANDO TODOS LOS PRODUCTOS =======================

    $('.category_item[category="all"]').click(function () {
        $('.producto-item').show();

    });
});