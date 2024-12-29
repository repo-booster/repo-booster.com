export default defineAppConfig({
  ui: {
    primary: 'green',
    gray: 'cool',
    button: {
      rounded: 'rounded-lg',
      default: {
        size: 'lg',
        variant: 'primary',
        styles: 'text-white bg-[#00DC82] hover:bg-[#00c874] focus:ring focus:ring-green-200',
      },
      secondary: {
        size: 'lg',
        styles: 'text-[#00DC82] bg-white border border-[#00DC82] hover:bg-green-50 focus:ring focus:ring-green-200',
      },
      tertiary: {
        size: 'sm',
        styles: 'text-gray-600 bg-gray-100 hover:bg-gray-200 focus:ring focus:ring-gray-300',
      },
      danger: {
        size: 'md',
        styles: 'text-white bg-red-600 hover:bg-red-500 focus:ring focus:ring-red-300',
      },
    },
    input: {
      default: {
        size: 'md',
        styles: 'rounded-lg border-gray-300 focus:ring focus:ring-green-200 dark:focus:ring-green-400',
      },
      error: {
        size: 'md',
        styles: 'rounded-lg border-red-600 focus:ring focus:ring-red-300',
      },
    },
    card: {
      rounded: 'rounded-lg',
      shadow: 'shadow-lg',
      padding: 'p-6',
      hover: 'hover:shadow-xl',
      border: 'border border-gray-200 dark:border-gray-700',
    },
    footer: {
      top: {
        wrapper: 'border-t border-gray-200 dark:border-gray-700',
        container: 'py-12 lg:py-20 bg-gray-50 dark:bg-gray-900',
      },
      bottom: {
        wrapper: 'border-t border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 bg-white',
        container: 'py-4 text-sm text-gray-500 dark:text-gray-400',
      },
      links: {
        styles: 'text-gray-500 hover:text-gray-900 dark:hover:text-white',
      },
    },
    page: {
      hero: {
        wrapper: 'py-24 bg-gradient-to-r from-green-50 to-green-100 dark:from-gray-800 dark:to-gray-900',
        heading: 'text-4xl font-bold text-gray-900 dark:text-white',
        subheading: 'text-lg text-gray-600 dark:text-gray-300',
      },
      content: {
        container: 'max-w-7xl mx-auto px-6 lg:px-8',
        text: 'text-base text-gray-700 dark:text-gray-300',
      },
    },
    modal: {
      overlay: 'fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70',
      container: 'bg-white dark:bg-gray-800 rounded-lg shadow-lg',
      header: 'text-lg font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 p-4',
      body: 'p-4 text-gray-700 dark:text-gray-300',
      footer: 'p-4 border-t border-gray-200 dark:border-gray-700 flex justify-end',
    },
  },
});
