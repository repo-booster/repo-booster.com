import { defineAppConfig } from 'nuxt/app'

export default defineAppConfig({
  ui: {
    primary: 'green',
    gray: 'slate',
    avatar: {
      default: {
        icon: 'i-ph-image'
      }
    },
    button: {
      default: {
        loadingIcon: 'i-ph-spinner'
      }
    },
    input: {
      default: {
        loadingIcon: 'i-ph-spinner'
      }
    },
    select: {
      default: {
        loadingIcon: 'i-ph-spinner',
        trailingIcon: 'i-ph-caret-down'
      }
    },
    selectMenu: {
      default: {
        selectedIcon: 'i-ph-check'
      }
    },
    notification: {
      default: {
        closeButton: {
          icon: 'i-ph-x'
        }
      }
    },
    commandPalette: {
      default: {
        icon: 'i-ph-magnifying-glass',
        loadingIcon: 'i-ph-spinner',
        selectedIcon: 'i-ph-check',
        emptyState: {
          icon: 'i-ph-magnifying-glass'
        },
        closeButton: {
          icon: 'i-ph-x'
        }
      }
    },
    table: {
      default: {
        sortAscIcon: 'i-ph-sort-ascending',
        sortDescIcon: 'i-ph-sort-descending',
        sortButton: {
          icon: 'i-ph-list'
        },
        loadingState: {
          icon: 'i-ph-spinner'
        },
        emptyState: {
          icon: 'i-ph-database'
        }
      }
    },
    pagination: {
      default: {
        prevButton: {
          icon: 'i-ph-arrow-left'
        },
        nextButton: {
          icon: 'i-ph-arrow-right'
        }
      }
    },
    card: {
      rounded: 'rounded-xl'
    },
    tooltip: {
      background: '!bg-background',
      popper: {
        strategy: 'absolute'
      }
    },
    breadcrumb: {
      divider: {
        base: 'w-4 h-4'
      },
      default: {
        divider: 'i-ph-caret-right'
      }
    },
    // `@nuxt/ui-pro` specific
    variables: {
      dark: {
        background: 'var(--color-gray-950)'
      }
    },
    icons: {
      dark: 'i-ph-moon',
      light: 'i-ph-sun',
      search: 'i-ph-magnifying-glass',
      external: 'i-ph-arrow-up-right',
      chevron: 'i-ph-caret-down',
      hash: 'i-ph-hash'
    },
    header: {
      wrapper: 'lg:mb-0 lg:border-0',
      links: {
        trailingIcon: {
          base: 'w-4 h-4'
        },
        popover: {
          popper: {
            strategy: 'absolute'
          },
          ui: {
            width: 'w-[16rem]'
          }
        }
      },
      popover: {
        links: {
          active: 'dark:bg-gray-950/50',
          inactive: 'dark:hover:bg-gray-950/50'
        }
      },
      button: {
        icon: {
          open: 'i-ph-list',
          close: 'i-ph-x'
        }
      }
    },
    navigation: {
      accordion: {
        button: {
          trailingIcon: {
            base: 'w-4 h-4'
          }
        }
      }
    },
    page: {
      card: {
        to: 'dark:hover:bg-gray-900/50'
      }
    },
    content: {
      search: {
        fileIcon: {
          name: 'i-ph-file-text'
        }
      },
      toc: {
        button: {
          trailingIcon: {
            base: 'w-4 h-4'
          }
        }
      },
      surround: {
        icon: {
          prev: 'i-ph-arrow-left',
          next: 'i-ph-arrow-right'
        }
      }
    },

    colorPicker: {
      slots: {
        root: 'data-[disabled]:opacity-75',
        picker: 'flex gap-4',
        selector: 'rounded-[calc(var(--ui-radius)*1.5)]',
        selectorBackground: 'w-full h-full relative rounded-[calc(var(--ui-radius)*1.2)]',
        selectorThumb: '-translate-y-1/2 -translate-x-1/2 absolute size-4 ring-2 ring-[var(--color-white)] rounded-full cursor-pointer data-[disabled]:cursor-not-allowed',
        track: 'w-[8px] relative rounded-[calc(var(--ui-radius)*1.5)]',
        trackThumb: 'absolute transform -translate-y-1/2 -translate-x-[4px] rtl:translate-x-[4px] size-4 rounded-full ring-2 ring-[var(--color-white)] cursor-pointer data-[disabled]:cursor-not-allowed'
      },
      variants: {
        size: {
          xs: {
            selector: 'w-38 h-38',
            track: 'h-38'
          },
          sm: {
            selector: 'w-40 h-40',
            track: 'h-40'
          },
          md: {
            selector: 'w-42 h-42',
            track: 'h-42'
          },
          lg: {
            selector: 'w-44 h-44',
            track: 'h-44'
          },
          xl: {
            selector: 'w-46 h-46',
            track: 'h-46'
          }
        }
      },
      compoundVariants: [],
      defaultVariants: {
        size: 'md'
      }
    }
  }
})
