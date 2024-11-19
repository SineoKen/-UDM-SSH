module.exports = function(eleventyConfig) {
    // Устанавливаем глобальное правило для permalink
    eleventyConfig.setFrontMatterParsingOptions({
        excerpt: true,
        // Будем делать permalink для всех Markdown-файлов в корень
    });

    // Обработка permalink для всех Markdown-файлов
    eleventyConfig.addCollection("mdToRoot", function(collection) {
        return collection.getFilteredByGlob("**/*.md").map((item) => {
            // Устанавливаем permalink как имя файла в корне
            item.data.permalink = `${item.fileSlug}.html`;
            return item;
        });
    });

    // Основные настройки
    return {
        dir: {
            input: ".", // Исходные файлы
            output: "_site", // Папка сборки
            layouts: "layouts", // Папка с шаблонами
        }
    };
};