const multiOptionsQuest = [
  {
    label: "Связь между данными",
    name: "data_connection",
    options: [
      {
        label: "Нет связи",
        value: "no_connections"
      },
      {
        label: "Произвольные ссылки",
        value: "random"
      },
      {
        label: "Предопределенные",
        value: "ready"
      },
      {
        label: "Ребра",
        value: "graph"
      }
    ]
  },
  {
    label: "Язык поддержки",
    name: "program_language",
    options: [
      {
        label: "C++",
        value: "c_plusplus"
      },
      {
        label: "JavaScript",
        value: "js"
      },
      {
        label: "C",
        value: "c"
      },
      {
        label: "Erlang",
        value: "erlang"
      },
      {
        label: "Java",
        value: "java"
      }
    ]
  },
  {
    label: "Поддержка сетевых протоколов",
    name: "network_protocol",
    options: [
      {
        label: "TCP",
        value: "tcp"
      },
      {
        label: "HTTP",
        value: "http"
      },
      {
        label: "Thrift",
        value: "thrift"
      }
    ]
  },
  {
    label: "Механизм произвольных протоколов",
    name: "random_requests",
    options: [
      {
        label: "MapReduce",
        value: "map_reduce"
      },
      {
        label: "Временные представления",
        value: "temp_view"
      },
      {
        label: "Команды",
        value: "commands"
      },
      {
        label: "SQL",
        value: "sql"
      },
      {
        label: "Слабая поддержка",
        value: "weak_support"
      },
      {
        label: "Поиск по графу",
        value: "graph_search"
      }
    ]
  },
  {
    label: "MapReduce поддержка",
    name: "map_reduce",
    options: [
      {
        label: "JavaScript",
        value: "js"
      },
      {
        label: "Erlang",
        value: "erlang"
      },
      {
        label: "Hadoop",
        value: "hadoop"
      },
      {
        label: "No",
        value: "no"
      }
    ]
  },
  {
    label: "Масштабирование",
    name: "scaling",
    options: [
      {
        label: "ЦОД",
        value: "cod"
      },
      {
        label: "Кластер",
        value: "cluster"
      }
    ]
  },
  {
    label: "Долговечность",
    name: "long",
    options: [
      {
        label: "Журнал с упреждающей записью",
        value: "journal"
      },
      {
        label: "Квориум по записи",
        value: "quorium"
      },
      {
        label: "Файл до записи",
        value: "file_write"
      },
      {
        label: "ACID",
        value: "acid"
      }
    ]
  },
  {
    label: "Массовая загрузка",
    name: "mass_download",
    options: [
      {
        label: "Журнал с упреждающей записью",
        value: "journal"
      },
      {
        label: "Квориум по записи",
        value: "quorium"
      },
      {
        label: "Файл до записи",
        value: "file_write"
      },
      {
        label: "ACID",
        value: "acid"
      }
    ]
  },
  {
    label: "Репликация",
    name: "replication",
    options: [
      {
        label: "Главный-подчиненный",
        value: "main-slave"
      },
      {
        label: "Главный-главный",
        value: "main-main"
      }
    ]
  },
  {
    label: "Параллелизм",
    name: "parallel",
    options: [
      {
        label: "Блокировка записи",
        value: "blocking_record"
      },
      {
        label: "Без блокировки",
        value: "no_block"
      },
      {
        label: "Векторные часы",
        value: "vector_clock"
      },
      {
        label: "Согласованность на уровне строк",
        value: "string"
      },
      {
        label: "Нет",
        value: "no"
      }
    ]
  },
  {
    label: "Транзакции",
    name: "transactions",
    options: [
      {
        label: "Нет",
        value: "nope"
      },
      {
        label: "ACID",
        value: "acid"
      },
      {
        label: "Да",
        value: "yes"
      }
    ]
  },
  {
    label: "Уровень безопасности",
    name: "safe",
    options: [
      {
        label: "Пользователи",
        value: "users"
      },
      {
        label: "Пароли",
        value: "password"
      },
      {
        label: "Kerberos",
        value: "kerberos"
      }
    ]
  }
];

const boolQuestions = [
  {
    label: "Индексы",
    name: "indexes"
  },
  {
    label: "Версирование",
    name: "version"
  },
  {
    label: "Массовая загрузка",
    name: "mass_downloads"
  },
  {
    label: "Сжатие",
    name: "compression"
  },
  {
    label: "Шардинг",
    name: "sharding"
  },
  {
    label: "Triggers",
    name: "Триггеры"
  },
  {
    label: "Множественная аренда",
    name: "mass_rent"
  }
];

export { multiOptionsQuest, boolQuestions };
