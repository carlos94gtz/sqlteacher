"use strict";

const monetization = {
  checkoutUrl: "",
  supportEmail: "support@example.com",
  productName: "SQL Interview Practice Pack"
};

const database = {
  customers: [
    { id: 1, name: "Ava Patel", city: "Austin", plan: "Pro", signup_date: "2025-01-12" },
    { id: 2, name: "Noah Kim", city: "Seattle", plan: "Starter", signup_date: "2025-02-04" },
    { id: 3, name: "Mia Garcia", city: "Austin", plan: "Starter", signup_date: "2025-03-19" },
    { id: 4, name: "Ethan Brooks", city: "Denver", plan: "Enterprise", signup_date: "2025-01-29" },
    { id: 5, name: "Lina Chen", city: "Chicago", plan: "Pro", signup_date: "2025-04-02" },
    { id: 6, name: "Sam Rivera", city: "Miami", plan: "Starter", signup_date: "2025-04-21" }
  ],
  orders: [
    { id: 101, customer_id: 1, product: "Analytics Kit", amount: 220, status: "paid", ordered_at: "2025-03-02" },
    { id: 102, customer_id: 2, product: "Dashboard Pack", amount: 95, status: "paid", ordered_at: "2025-03-05" },
    { id: 103, customer_id: 1, product: "Workflow Seats", amount: 180, status: "pending", ordered_at: "2025-03-17" },
    { id: 104, customer_id: 4, product: "Enterprise Setup", amount: 1200, status: "paid", ordered_at: "2025-04-01" },
    { id: 105, customer_id: 5, product: "Analytics Kit", amount: 220, status: "refunded", ordered_at: "2025-04-08" },
    { id: 106, customer_id: 3, product: "Dashboard Pack", amount: 95, status: "paid", ordered_at: "2025-04-15" },
    { id: 107, customer_id: 6, product: "Workflow Seats", amount: 180, status: "paid", ordered_at: "2025-04-22" }
  ],
  tickets: [
    { id: 9001, customer_id: 1, category: "Billing", priority: "Medium", resolved: "yes" },
    { id: 9002, customer_id: 4, category: "Security", priority: "High", resolved: "no" },
    { id: 9003, customer_id: 5, category: "Product", priority: "Low", resolved: "yes" },
    { id: 9004, customer_id: 2, category: "Billing", priority: "Low", resolved: "no" },
    { id: 9005, customer_id: 3, category: "Product", priority: "Medium", resolved: "yes" }
  ]
};

const lessons = [
  {
    title: "Select Columns",
    level: "Beginner",
    body: `
      <p><code>SELECT</code> is how you choose which fields a query should return. A table may contain many columns, but most questions only need a few of them. Good SQL is specific: it asks for the fields needed to answer the business question and leaves the rest behind.</p>
      <p>The basic pattern is <code>SELECT column_list FROM table_name</code>. Use commas between columns. Use <code>*</code> only when you want to inspect a table or when every column is truly needed.</p>
      <div class="example-block">
        <strong>Pattern</strong>
        <pre>SELECT name, city
FROM customers;</pre>
      </div>
      <ul>
        <li>Column order in <code>SELECT</code> becomes column order in the result.</li>
        <li>Table names in this course are lowercase: <code>customers</code>, <code>orders</code>, and <code>tickets</code>.</li>
        <li>A semicolon is optional in this playground, but it is a useful habit.</li>
      </ul>
    `,
    exercises: [
      {
        title: "Names and plans",
        prompt: "Return the name and plan columns from the customers table.",
        starter: "SELECT name, plan\nFROM customers;",
        hint: "Use SELECT with two column names separated by a comma.",
        solution: "SELECT name, plan\nFROM customers;",
        expected: {
          columns: ["name", "plan"],
          rows: [
            { name: "Ava Patel", plan: "Pro" },
            { name: "Noah Kim", plan: "Starter" },
            { name: "Mia Garcia", plan: "Starter" },
            { name: "Ethan Brooks", plan: "Enterprise" },
            { name: "Lina Chen", plan: "Pro" },
            { name: "Sam Rivera", plan: "Starter" }
          ]
        }
      },
      {
        title: "Order snapshot",
        prompt: "Return id, product, and status from the orders table.",
        starter: "SELECT id, product, status\nFROM orders;",
        hint: "Ask for three columns from orders in the same order as the prompt.",
        solution: "SELECT id, product, status\nFROM orders;",
        expected: {
          columns: ["id", "product", "status"],
          rows: [
            { id: 101, product: "Analytics Kit", status: "paid" },
            { id: 102, product: "Dashboard Pack", status: "paid" },
            { id: 103, product: "Workflow Seats", status: "pending" },
            { id: 104, product: "Enterprise Setup", status: "paid" },
            { id: 105, product: "Analytics Kit", status: "refunded" },
            { id: 106, product: "Dashboard Pack", status: "paid" },
            { id: 107, product: "Workflow Seats", status: "paid" }
          ]
        }
      },
      {
        title: "Inspect tickets",
        prompt: "Return every column from the tickets table.",
        starter: "SELECT *\nFROM tickets;",
        hint: "Use the wildcard to inspect every field in tickets.",
        solution: "SELECT *\nFROM tickets;",
        expected: {
          columns: ["id", "customer_id", "category", "priority", "resolved"],
          rows: [
            { id: 9001, customer_id: 1, category: "Billing", priority: "Medium", resolved: "yes" },
            { id: 9002, customer_id: 4, category: "Security", priority: "High", resolved: "no" },
            { id: 9003, customer_id: 5, category: "Product", priority: "Low", resolved: "yes" },
            { id: 9004, customer_id: 2, category: "Billing", priority: "Low", resolved: "no" },
            { id: 9005, customer_id: 3, category: "Product", priority: "Medium", resolved: "yes" }
          ]
        }
      }
    ]
  },
  {
    title: "Filter Rows",
    level: "Beginner",
    body: `
      <p><code>WHERE</code> narrows a query from “all rows” to “only rows that match this condition.” This is one of the most important SQL ideas because real datasets are usually too large to inspect all at once.</p>
      <p>Text values go inside quotes, while numbers do not. Equality uses one equals sign: <code>=</code>. Numeric comparisons use operators like <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, and <code>&lt;=</code>.</p>
      <div class="example-block">
        <strong>Pattern</strong>
        <pre>SELECT *
FROM orders
WHERE amount &gt; 100;</pre>
      </div>
      <ul>
        <li>Filtering happens before the final result is displayed.</li>
        <li>This playground supports one condition at a time so you can focus on the core pattern.</li>
        <li>Use exact text values from the sample database, such as <code>'paid'</code> or <code>'Austin'</code>.</li>
      </ul>
    `,
    exercises: [
      {
        title: "Austin customers",
        prompt: "Return every column for customers who live in Austin.",
        starter: "SELECT *\nFROM customers\nWHERE city = 'Austin';",
        hint: "The table is customers and the city value is text.",
        solution: "SELECT *\nFROM customers\nWHERE city = 'Austin';",
        expected: {
          columns: ["id", "name", "city", "plan", "signup_date"],
          rows: [
            { id: 1, name: "Ava Patel", city: "Austin", plan: "Pro", signup_date: "2025-01-12" },
            { id: 3, name: "Mia Garcia", city: "Austin", plan: "Starter", signup_date: "2025-03-19" }
          ]
        }
      },
      {
        title: "Large orders",
        prompt: "Return id, product, and amount for orders greater than 200.",
        starter: "SELECT id, product, amount\nFROM orders\nWHERE amount > 200;",
        hint: "Use a numeric comparison against amount, without quotes around 200.",
        solution: "SELECT id, product, amount\nFROM orders\nWHERE amount > 200;",
        expected: {
          columns: ["id", "product", "amount"],
          rows: [
            { id: 101, product: "Analytics Kit", amount: 220 },
            { id: 104, product: "Enterprise Setup", amount: 1200 },
            { id: 105, product: "Analytics Kit", amount: 220 }
          ]
        }
      },
      {
        title: "Open tickets",
        prompt: "Return id, category, and priority for tickets that are not resolved.",
        starter: "SELECT id, category, priority\nFROM tickets\nWHERE resolved = 'no';",
        hint: "The resolved column stores text values: 'yes' and 'no'.",
        solution: "SELECT id, category, priority\nFROM tickets\nWHERE resolved = 'no';",
        expected: {
          columns: ["id", "category", "priority"],
          rows: [
            { id: 9002, category: "Security", priority: "High" },
            { id: 9004, category: "Billing", priority: "Low" }
          ]
        }
      }
    ]
  },
  {
    title: "Sort Results",
    level: "Beginner",
    body: `
      <p><code>ORDER BY</code> controls the sequence of rows in your answer. Without sorting, databases are free to return rows in whatever order is convenient, which is risky when you need “largest,” “newest,” or “alphabetical.”</p>
      <p>Use <code>ASC</code> for ascending order and <code>DESC</code> for descending order. If you omit the direction, SQL uses ascending order by default.</p>
      <div class="example-block">
        <strong>Pattern</strong>
        <pre>SELECT product, amount
FROM orders
ORDER BY amount DESC;</pre>
      </div>
      <ul>
        <li>Sort after you choose and filter rows.</li>
        <li>Sorting by dates works here because the sample dates use <code>YYYY-MM-DD</code> format.</li>
        <li>Choose the sort column based on the question, not just the displayed columns.</li>
      </ul>
    `,
    exercises: [
      {
        title: "Paid order ranking",
        prompt: "Return product and amount for paid orders, sorted by amount from highest to lowest.",
        starter: "SELECT product, amount\nFROM orders\nWHERE status = 'paid'\nORDER BY amount DESC;",
        hint: "Filter status first, then use ORDER BY amount DESC.",
        solution: "SELECT product, amount\nFROM orders\nWHERE status = 'paid'\nORDER BY amount DESC;",
        expected: {
          columns: ["product", "amount"],
          rows: [
            { product: "Enterprise Setup", amount: 1200 },
            { product: "Analytics Kit", amount: 220 },
            { product: "Workflow Seats", amount: 180 },
            { product: "Dashboard Pack", amount: 95 },
            { product: "Dashboard Pack", amount: 95 }
          ]
        }
      },
      {
        title: "Customer signup order",
        prompt: "Return name and signup_date from customers, sorted from newest signup to oldest.",
        starter: "SELECT name, signup_date\nFROM customers\nORDER BY signup_date DESC;",
        hint: "Sort signup_date descending to put the newest date first.",
        solution: "SELECT name, signup_date\nFROM customers\nORDER BY signup_date DESC;",
        expected: {
          columns: ["name", "signup_date"],
          rows: [
            { name: "Sam Rivera", signup_date: "2025-04-21" },
            { name: "Lina Chen", signup_date: "2025-04-02" },
            { name: "Mia Garcia", signup_date: "2025-03-19" },
            { name: "Noah Kim", signup_date: "2025-02-04" },
            { name: "Ethan Brooks", signup_date: "2025-01-29" },
            { name: "Ava Patel", signup_date: "2025-01-12" }
          ]
        }
      },
      {
        title: "Ticket priority list",
        prompt: "Return id, category, and priority from tickets, sorted alphabetically by priority.",
        starter: "SELECT id, category, priority\nFROM tickets\nORDER BY priority ASC;",
        hint: "Alphabetical sorting is ASC. High comes before Low and Medium.",
        solution: "SELECT id, category, priority\nFROM tickets\nORDER BY priority ASC;",
        expected: {
          columns: ["id", "category", "priority"],
          rows: [
            { id: 9002, category: "Security", priority: "High" },
            { id: 9003, category: "Product", priority: "Low" },
            { id: 9004, category: "Billing", priority: "Low" },
            { id: 9001, category: "Billing", priority: "Medium" },
            { id: 9005, category: "Product", priority: "Medium" }
          ]
        }
      }
    ]
  },
  {
    title: "Limit Output",
    level: "Beginner",
    body: `
      <p><code>LIMIT</code> keeps a result set short. It is useful when previewing data, building a top list, or protecting yourself from a huge result while exploring an unfamiliar table.</p>
      <p>The order matters: if you need the “top” rows, sort first and then limit. A query with <code>LIMIT 2</code> but no <code>ORDER BY</code> only means “give me two rows,” not “give me the best two rows.”</p>
      <div class="example-block">
        <strong>Pattern</strong>
        <pre>SELECT id, amount
FROM orders
ORDER BY amount DESC
LIMIT 2;</pre>
      </div>
      <ul>
        <li>Use <code>LIMIT</code> at the end of the query.</li>
        <li>Combine it with <code>ORDER BY</code> for leaderboards and newest-item lists.</li>
        <li>Small previews are a good way to learn a table safely.</li>
      </ul>
    `,
    exercises: [
      {
        title: "Top two orders",
        prompt: "Return id, product, and amount for the two highest-value orders.",
        starter: "SELECT id, product, amount\nFROM orders\nORDER BY amount DESC\nLIMIT 2;",
        hint: "Sort all orders by amount descending, then limit to 2.",
        solution: "SELECT id, product, amount\nFROM orders\nORDER BY amount DESC\nLIMIT 2;",
        expected: {
          columns: ["id", "product", "amount"],
          rows: [
            { id: 104, product: "Enterprise Setup", amount: 1200 },
            { id: 101, product: "Analytics Kit", amount: 220 }
          ]
        }
      },
      {
        title: "Newest customers",
        prompt: "Return name and city for the three newest customers.",
        starter: "SELECT name, city\nFROM customers\nORDER BY signup_date DESC\nLIMIT 3;",
        hint: "Sort by signup_date DESC, even though signup_date is not selected.",
        solution: "SELECT name, city\nFROM customers\nORDER BY signup_date DESC\nLIMIT 3;",
        expected: {
          columns: ["name", "city"],
          rows: [
            { name: "Sam Rivera", city: "Miami" },
            { name: "Lina Chen", city: "Chicago" },
            { name: "Mia Garcia", city: "Austin" }
          ]
        }
      },
      {
        title: "First two tickets",
        prompt: "Return id and category for the first two tickets in the table.",
        starter: "SELECT id, category\nFROM tickets\nLIMIT 2;",
        hint: "This is a simple preview, so no ORDER BY is needed.",
        solution: "SELECT id, category\nFROM tickets\nLIMIT 2;",
        expected: {
          columns: ["id", "category"],
          rows: [
            { id: 9001, category: "Billing" },
            { id: 9002, category: "Security" }
          ]
        }
      }
    ]
  },
  {
    title: "Join Tables",
    level: "Intermediate",
    body: `
      <p><code>JOIN</code> lets one query use columns from related tables. In this sample database, <code>orders.customer_id</code> and <code>tickets.customer_id</code> point to <code>customers.id</code>. That relationship lets you answer questions like “which customer placed this order?”</p>
      <p>The join condition goes after <code>ON</code>. It tells SQL how rows match. Qualified column names such as <code>orders.customer_id</code> are helpful when different tables have similar column names.</p>
      <div class="example-block">
        <strong>Pattern</strong>
        <pre>SELECT customers.name, orders.product
FROM orders
JOIN customers ON orders.customer_id = customers.id;</pre>
      </div>
      <ul>
        <li>This playground supports simple inner joins with equality conditions.</li>
        <li>Use <code>AS</code> to rename output columns, like <code>customers.name AS customer</code>.</li>
        <li>After joining, you can still filter with <code>WHERE</code>.</li>
      </ul>
    `,
    exercises: [
      {
        title: "Paid orders with names",
        prompt: "Return customer name as customer, product, and amount for paid orders.",
        starter: "SELECT customers.name AS customer, orders.product, orders.amount\nFROM orders\nJOIN customers ON orders.customer_id = customers.id\nWHERE orders.status = 'paid';",
        hint: "Join orders to customers on customer_id = id, then filter paid orders.",
        solution: "SELECT customers.name AS customer, orders.product, orders.amount\nFROM orders\nJOIN customers ON orders.customer_id = customers.id\nWHERE orders.status = 'paid';",
        expected: {
          columns: ["customer", "product", "amount"],
          rows: [
            { customer: "Ava Patel", product: "Analytics Kit", amount: 220 },
            { customer: "Noah Kim", product: "Dashboard Pack", amount: 95 },
            { customer: "Ethan Brooks", product: "Enterprise Setup", amount: 1200 },
            { customer: "Mia Garcia", product: "Dashboard Pack", amount: 95 },
            { customer: "Sam Rivera", product: "Workflow Seats", amount: 180 }
          ]
        }
      },
      {
        title: "Ticket owners",
        prompt: "Return customer name as customer, category, and priority for all tickets.",
        starter: "SELECT customers.name AS customer, tickets.category, tickets.priority\nFROM tickets\nJOIN customers ON tickets.customer_id = customers.id;",
        hint: "Join tickets to customers using tickets.customer_id = customers.id.",
        solution: "SELECT customers.name AS customer, tickets.category, tickets.priority\nFROM tickets\nJOIN customers ON tickets.customer_id = customers.id;",
        expected: {
          columns: ["customer", "category", "priority"],
          rows: [
            { customer: "Ava Patel", category: "Billing", priority: "Medium" },
            { customer: "Ethan Brooks", category: "Security", priority: "High" },
            { customer: "Lina Chen", category: "Product", priority: "Low" },
            { customer: "Noah Kim", category: "Billing", priority: "Low" },
            { customer: "Mia Garcia", category: "Product", priority: "Medium" }
          ]
        }
      },
      {
        title: "Pending order owner",
        prompt: "Return customer name as customer and product for pending orders.",
        starter: "SELECT customers.name AS customer, orders.product\nFROM orders\nJOIN customers ON orders.customer_id = customers.id\nWHERE orders.status = 'pending';",
        hint: "Join first, then filter orders.status to 'pending'.",
        solution: "SELECT customers.name AS customer, orders.product\nFROM orders\nJOIN customers ON orders.customer_id = customers.id\nWHERE orders.status = 'pending';",
        expected: {
          columns: ["customer", "product"],
          rows: [
            { customer: "Ava Patel", product: "Workflow Seats" }
          ]
        }
      }
    ]
  },
  {
    title: "Aggregate Data",
    level: "Intermediate",
    body: `
      <p>Aggregate functions summarize rows into numbers. Instead of listing every order, you can count rows, add revenue, or compute an average. This is how SQL becomes an analysis tool rather than just a lookup tool.</p>
      <p>Use <code>GROUP BY</code> when you want one summary row per category. Without <code>GROUP BY</code>, an aggregate returns one summary for the filtered table.</p>
      <div class="example-block">
        <strong>Pattern</strong>
        <pre>SELECT status, SUM(amount) AS total_amount
FROM orders
GROUP BY status;</pre>
      </div>
      <ul>
        <li><code>COUNT(*)</code> counts rows.</li>
        <li><code>SUM(amount)</code> adds numeric values.</li>
        <li><code>AVG(amount)</code> returns an average, rounded to two decimals here.</li>
      </ul>
    `,
    exercises: [
      {
        title: "Revenue by status",
        prompt: "Return status and SUM(amount) as total_amount from orders grouped by status, sorted by total_amount descending.",
        starter: "SELECT status, SUM(amount) AS total_amount\nFROM orders\nGROUP BY status\nORDER BY total_amount DESC;",
        hint: "Use SUM(amount), GROUP BY status, and ORDER BY total_amount DESC.",
        solution: "SELECT status, SUM(amount) AS total_amount\nFROM orders\nGROUP BY status\nORDER BY total_amount DESC;",
        expected: {
          columns: ["status", "total_amount"],
          rows: [
            { status: "paid", total_amount: 1790 },
            { status: "refunded", total_amount: 220 },
            { status: "pending", total_amount: 180 }
          ]
        }
      },
      {
        title: "Customers by plan",
        prompt: "Return plan and COUNT(*) as customer_count from customers grouped by plan, sorted by customer_count descending.",
        starter: "SELECT plan, COUNT(*) AS customer_count\nFROM customers\nGROUP BY plan\nORDER BY customer_count DESC;",
        hint: "Group by plan and count rows in each group.",
        solution: "SELECT plan, COUNT(*) AS customer_count\nFROM customers\nGROUP BY plan\nORDER BY customer_count DESC;",
        expected: {
          columns: ["plan", "customer_count"],
          rows: [
            { plan: "Starter", customer_count: 3 },
            { plan: "Pro", customer_count: 2 },
            { plan: "Enterprise", customer_count: 1 }
          ]
        }
      },
      {
        title: "Average paid order",
        prompt: "Return AVG(amount) as average_paid_amount for paid orders.",
        starter: "SELECT AVG(amount) AS average_paid_amount\nFROM orders\nWHERE status = 'paid';",
        hint: "Filter paid orders, then aggregate with AVG(amount).",
        solution: "SELECT AVG(amount) AS average_paid_amount\nFROM orders\nWHERE status = 'paid';",
        expected: {
          columns: ["average_paid_amount"],
          rows: [
            { average_paid_amount: 358 }
          ]
        }
      }
    ]
  }
];

function loadSolvedExercises() {
  try {
    return new Set(JSON.parse(localStorage.getItem("querycraftSolved") || "[]").filter((item) => typeof item === "string"));
  } catch {
    return new Set();
  }
}

const state = {
  activeLesson: 0,
  activeExercise: 0,
  solved: loadSolvedExercises()
};

const els = {
  lessonNav: document.querySelector("#lessonNav"),
  progressLabel: document.querySelector("#progressLabel"),
  progressPercent: document.querySelector("#progressPercent"),
  progressFill: document.querySelector("#progressFill"),
  lessonTitle: document.querySelector("#lessonTitle"),
  lessonLevel: document.querySelector("#lessonLevel"),
  lessonBody: document.querySelector("#lessonBody"),
  exerciseList: document.querySelector("#exerciseList"),
  exerciseStatus: document.querySelector("#exerciseStatus"),
  exerciseTitle: document.querySelector("#exerciseTitle"),
  exercisePrompt: document.querySelector("#exercisePrompt"),
  queryInput: document.querySelector("#queryInput"),
  feedback: document.querySelector("#feedback"),
  resultCount: document.querySelector("#resultCount"),
  resultsTable: document.querySelector("#resultsTable"),
  schemaGrid: document.querySelector("#schemaGrid"),
  checkoutLink: document.querySelector("#checkoutLink"),
  checkoutNote: document.querySelector("#checkoutNote"),
  runBtn: document.querySelector("#runBtn"),
  checkBtn: document.querySelector("#checkBtn"),
  hintBtn: document.querySelector("#hintBtn"),
  solutionBtn: document.querySelector("#solutionBtn"),
  prevBtn: document.querySelector("#prevBtn"),
  nextBtn: document.querySelector("#nextBtn"),
  resetProgressBtn: document.querySelector("#resetProgressBtn")
};

function configureCheckout() {
  if (!els.checkoutLink || !els.checkoutNote) return;
  if (monetization.checkoutUrl) {
    els.checkoutLink.href = monetization.checkoutUrl;
    els.checkoutLink.textContent = "Buy the practice pack";
    els.checkoutNote.textContent = "Secure checkout opens in a new tab.";
    els.checkoutLink.target = "_blank";
    els.checkoutLink.rel = "noopener";
    return;
  }

  const subject = encodeURIComponent(`Access request: ${monetization.productName}`);
  const body = encodeURIComponent("Hi, I would like to buy the SQL Interview Practice Pack when it is available.");
  els.checkoutLink.href = `mailto:${monetization.supportEmail}?subject=${subject}&body=${body}`;
  els.checkoutLink.textContent = "Request access";
  els.checkoutNote.textContent = "Add a Stripe Payment Link in app.js to turn this into a live checkout.";
}

function normalizeSql(sql) {
  return sql.trim().replace(/;$/, "").replace(/\s+/g, " ");
}

function splitCsv(input) {
  const parts = [];
  let current = "";
  let quote = null;
  for (const char of input) {
    if ((char === "'" || char === '"') && !quote) {
      quote = char;
    } else if (char === quote) {
      quote = null;
    }

    if (char === "," && !quote) {
      parts.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }
  if (current.trim()) parts.push(current.trim());
  return parts;
}

function parseValue(raw) {
  const value = raw.trim();
  if (/^'.*'$/.test(value) || /^".*"$/.test(value)) return value.slice(1, -1);
  if (/^-?\d+(\.\d+)?$/.test(value)) return Number(value);
  return value;
}

function getField(row, field) {
  const cleanField = field.trim();
  if (Object.prototype.hasOwnProperty.call(row, cleanField)) return row[cleanField];
  const suffix = `.${cleanField}`;
  const key = Object.keys(row).find((candidate) => candidate.endsWith(suffix));
  return key ? row[key] : undefined;
}

function parseSelectExpression(expression) {
  const match = expression.match(/^(.+?)\s+AS\s+([a-z_][\w]*)$/i);
  const source = match ? match[1].trim() : expression.trim();
  const alias = match ? match[2].trim() : source.split(".").pop();
  const aggregate = source.match(/^(COUNT|SUM|AVG)\((\*|[a-z_][\w.]*?)\)$/i);
  return {
    source,
    alias,
    aggregate: aggregate ? aggregate[1].toUpperCase() : null,
    aggregateField: aggregate ? aggregate[2] : null
  };
}

function compareValues(left, operator, right) {
  switch (operator) {
    case "=":
      return String(left) === String(right);
    case "!=":
    case "<>":
      return String(left) !== String(right);
    case ">":
      return Number(left) > Number(right);
    case "<":
      return Number(left) < Number(right);
    case ">=":
      return Number(left) >= Number(right);
    case "<=":
      return Number(left) <= Number(right);
    default:
      throw new Error(`Unsupported operator ${operator}`);
  }
}

function applyWhere(rows, whereClause) {
  if (!whereClause) return rows;
  const match = whereClause.match(/^([a-z_][\w.]*?)\s*(=|!=|<>|>=|<=|>|<)\s*(.+)$/i);
  if (!match) throw new Error("This playground supports one simple WHERE condition.");
  const [, field, operator, rawValue] = match;
  const value = parseValue(rawValue);
  return rows.filter((row) => compareValues(getField(row, field), operator, value));
}

function applyJoin(baseTable, baseRows, joinClause) {
  if (!joinClause) return baseRows;
  const match = joinClause.match(/^JOIN\s+([a-z_][\w]*)\s+ON\s+([a-z_][\w.]*?)\s*=\s*([a-z_][\w.]*?)$/i);
  if (!match) throw new Error("This playground supports simple JOIN table ON left = right syntax.");
  const [, joinTable, leftField, rightField] = match;
  if (!database[joinTable]) throw new Error(`Unknown table: ${joinTable}`);

  const joinedRows = [];
  baseRows.forEach((leftRow) => {
    database[joinTable].forEach((rightRaw) => {
      const rightRow = prefixRow(joinTable, rightRaw);
      const merged = { ...leftRow, ...rightRow };
      if (String(getField(merged, leftField)) === String(getField(merged, rightField))) {
        joinedRows.push(merged);
      }
    });
  });

  return joinedRows.map((row) => {
    const unqualified = {};
    Object.entries(row).forEach(([key, value]) => {
      const shortKey = key.includes(".") ? key.split(".").pop() : key;
      if (!Object.prototype.hasOwnProperty.call(unqualified, shortKey)) unqualified[shortKey] = value;
    });
    return { ...unqualified, ...row };
  });
}

function prefixRow(table, row) {
  const prefixed = {};
  Object.entries(row).forEach(([key, value]) => {
    prefixed[key] = value;
    prefixed[`${table}.${key}`] = value;
  });
  return prefixed;
}

function groupRows(rows, selectExpressions, groupByField) {
  const aggregateExpressions = selectExpressions.filter((item) => item.aggregate);
  if (!groupByField && aggregateExpressions.length === 0) return rows;
  if (aggregateExpressions.length === 0) throw new Error("GROUP BY needs an aggregate like COUNT, SUM, or AVG in this playground.");

  const groups = new Map();
  rows.forEach((row) => {
    const key = groupByField ? getField(row, groupByField) : "__all__";
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(row);
  });

  return Array.from(groups.entries()).map(([groupValue, group]) => {
    const output = {};
    selectExpressions.forEach((expression) => {
      if (!expression.aggregate) {
        output[expression.alias] = groupByField ? groupValue : getField(group[0], expression.source);
        return;
      }

      if (expression.aggregate === "COUNT") output[expression.alias] = group.length;
      if (expression.aggregate === "SUM") {
        output[expression.alias] = group.reduce((total, row) => total + Number(getField(row, expression.aggregateField) || 0), 0);
      }
      if (expression.aggregate === "AVG") {
        const total = group.reduce((sum, row) => sum + Number(getField(row, expression.aggregateField) || 0), 0);
        output[expression.alias] = Number((total / group.length).toFixed(2));
      }
    });
    return output;
  });
}

function projectRows(rows, selectExpressions, tableName) {
  if (selectExpressions.length === 1 && selectExpressions[0].source === "*") {
    const sample = database[tableName][0] || {};
    const columns = Object.keys(sample);
    return {
      columns,
      rows: rows.map((row) => {
        const projected = {};
        columns.forEach((column) => {
          projected[column] = getField(row, `${tableName}.${column}`) ?? getField(row, column);
        });
        return projected;
      })
    };
  }

  const columns = selectExpressions.map((expression) => expression.alias);
  return {
    columns,
    rows: rows.map((row) => {
      const projected = {};
      selectExpressions.forEach((expression) => {
        projected[expression.alias] = getField(row, expression.source);
      });
      return projected;
    })
  };
}

function sortRows(rows, orderByField, orderDirection) {
  const field = orderByField.split(".").pop();
  rows.sort((a, b) => {
    const left = a[field] ?? getField(a, orderByField);
    const right = b[field] ?? getField(b, orderByField);
    if (left === right) return 0;
    const comparison = left > right ? 1 : -1;
    return orderDirection === "DESC" ? comparison * -1 : comparison;
  });
}

function runSql(sql) {
  const query = normalizeSql(sql);
  const mainMatch = query.match(/^SELECT\s+(.+?)\s+FROM\s+([a-z_][\w]*)(.*)$/i);
  if (!mainMatch) throw new Error("Start with SELECT columns FROM table.");

  const [, selectClause, tableName, remainderRaw] = mainMatch;
  if (!database[tableName]) throw new Error(`Unknown table: ${tableName}`);

  let remainder = remainderRaw.trim();
  let joinClause = "";
  let whereClause = "";
  let groupByField = "";
  let orderByField = "";
  let orderDirection = "ASC";
  let limit = null;

  const limitMatch = remainder.match(/(?:^|\s+)LIMIT\s+(\d+)$/i);
  if (limitMatch) {
    limit = Number(limitMatch[1]);
    remainder = remainder.slice(0, limitMatch.index).trim();
  }

  const orderMatch = remainder.match(/(?:^|\s+)ORDER\s+BY\s+([a-z_][\w.]*)(?:\s+(ASC|DESC))?$/i);
  if (orderMatch) {
    orderByField = orderMatch[1];
    orderDirection = (orderMatch[2] || "ASC").toUpperCase();
    remainder = remainder.slice(0, orderMatch.index).trim();
  }

  const groupMatch = remainder.match(/(?:^|\s+)GROUP\s+BY\s+([a-z_][\w.]*)$/i);
  if (groupMatch) {
    groupByField = groupMatch[1];
    remainder = remainder.slice(0, groupMatch.index).trim();
  }

  const whereMatch = remainder.match(/(?:^|\s+)WHERE\s+(.+)$/i);
  if (whereMatch) {
    whereClause = whereMatch[1].trim();
    remainder = remainder.slice(0, whereMatch.index).trim();
  }

  const joinMatch = remainder.match(/^(JOIN\s+[a-z_][\w]*\s+ON\s+.+)$/i);
  if (joinMatch) {
    joinClause = joinMatch[1];
    remainder = "";
  }

  if (remainder) throw new Error(`Could not understand this part: ${remainder}`);

  const selectExpressions = splitCsv(selectClause).map(parseSelectExpression);
  let rows = database[tableName].map((row) => prefixRow(tableName, row));
  rows = applyJoin(tableName, rows, joinClause);
  rows = applyWhere(rows, whereClause);

  const hasAggregates = selectExpressions.some((expression) => expression.aggregate);
  let result;
  if (hasAggregates || groupByField) {
    rows = groupRows(rows, selectExpressions, groupByField);
    result = { columns: selectExpressions.map((expression) => expression.alias), rows };
  } else {
    if (orderByField) sortRows(rows, orderByField, orderDirection);
    result = projectRows(rows, selectExpressions, tableName);
  }

  if ((hasAggregates || groupByField) && orderByField) sortRows(result.rows, orderByField, orderDirection);

  if (limit !== null) result.rows = result.rows.slice(0, limit);
  return result;
}

function renderTable(result) {
  els.resultCount.textContent = `${result.rows.length} ${result.rows.length === 1 ? "row" : "rows"}`;
  if (result.rows.length === 0) {
    els.resultsTable.innerHTML = "<div class=\"feedback\">No rows returned.</div>";
    return;
  }

  const head = result.columns.map((column) => `<th scope="col">${escapeHtml(column)}</th>`).join("");
  const body = result.rows.map((row) => {
    const cells = result.columns.map((column) => `<td>${escapeHtml(row[column])}</td>`).join("");
    return `<tr>${cells}</tr>`;
  }).join("");
  els.resultsTable.innerHTML = `<table><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table>`;
}

function renderSchema() {
  els.schemaGrid.innerHTML = Object.entries(database).map(([table, rows]) => {
    const sample = rows[0];
    const fields = Object.entries(sample).map(([name, value]) => {
      const type = typeof value === "number" ? "number" : "text";
      return `<li><code>${escapeHtml(name)}</code><span>${type}</span></li>`;
    }).join("");
    return `
      <article class="schema-table">
        <div class="schema-title">${escapeHtml(table)} <span>${rows.length} rows</span></div>
        <ul>${fields}</ul>
      </article>
    `;
  }).join("");
}

function exerciseKey(lessonIndex = state.activeLesson, exerciseIndex = state.activeExercise) {
  return `${lessonIndex}:${exerciseIndex}`;
}

function activeExercise() {
  return lessons[state.activeLesson].exercises[state.activeExercise];
}

function totalExerciseCount() {
  return lessons.reduce((total, lesson) => total + lesson.exercises.length, 0);
}

function solvedCountForLesson(lessonIndex) {
  return lessons[lessonIndex].exercises.filter((_, exerciseIndex) => state.solved.has(exerciseKey(lessonIndex, exerciseIndex))).length;
}

function renderLessons() {
  els.lessonNav.innerHTML = lessons.map((lesson, index) => {
    const solvedCount = solvedCountForLesson(index);
    const solved = solvedCount === lesson.exercises.length;
    return `
      <button type="button" class="${index === state.activeLesson ? "active" : ""}" data-lesson="${index}">
        <span class="number">${index + 1}</span>
        <span>${escapeHtml(lesson.title)}</span>
        <span class="${solved ? "done" : "count"}">${solved ? "✓" : `${solvedCount}/${lesson.exercises.length}`}</span>
      </button>
    `;
  }).join("");
}

function renderExercises() {
  const lesson = lessons[state.activeLesson];
  els.exerciseList.innerHTML = lesson.exercises.map((exercise, index) => {
    const solved = state.solved.has(exerciseKey(state.activeLesson, index));
    return `
      <button type="button" class="${index === state.activeExercise ? "active" : ""} ${solved ? "solved" : ""}" data-exercise="${index}">
        ${index + 1}. ${escapeHtml(exercise.title)}
      </button>
    `;
  }).join("");
}

function renderProgress() {
  const total = totalExerciseCount();
  const complete = state.solved.size;
  const percent = Math.round((complete / total) * 100);
  els.progressLabel.textContent = `${complete} of ${total} exercises complete`;
  els.progressPercent.textContent = `${percent}%`;
  els.progressFill.style.width = `${percent}%`;
}

function setFeedback(message, type = "") {
  els.feedback.textContent = message;
  els.feedback.className = `feedback ${type}`.trim();
}

function loadLesson(index) {
  state.activeLesson = Math.max(0, Math.min(index, lessons.length - 1));
  state.activeExercise = 0;
  const lesson = lessons[state.activeLesson];
  els.lessonTitle.textContent = lesson.title;
  els.lessonLevel.textContent = lesson.level;
  els.lessonBody.innerHTML = lesson.body;
  els.prevBtn.disabled = state.activeLesson === 0;
  els.nextBtn.disabled = state.activeLesson === lessons.length - 1;
  renderLessons();
  loadExercise(0);
}

function loadExercise(index) {
  const lesson = lessons[state.activeLesson];
  state.activeExercise = Math.max(0, Math.min(index, lesson.exercises.length - 1));
  const exercise = activeExercise();
  const key = exerciseKey();
  els.exerciseTitle.textContent = exercise.title;
  els.exercisePrompt.textContent = exercise.prompt;
  els.queryInput.value = localStorage.getItem(`querycraftDraft:${key}`) || exercise.starter;
  els.exerciseStatus.textContent = state.solved.has(key) ? "Solved" : "Not solved";
  renderLessons();
  renderExercises();
  renderProgress();
  runCurrentQuery(false);
}

function runCurrentQuery(showSuccess = true) {
  try {
    const result = runSql(els.queryInput.value);
    renderTable(result);
    if (showSuccess) setFeedback("Query ran successfully. Check it when the output matches the exercise.", "success");
    return result;
  } catch (error) {
    els.resultCount.textContent = "0 rows";
    els.resultsTable.innerHTML = "";
    setFeedback(error.message, "error");
    return null;
  }
}

function normalizeResult(result) {
  return JSON.stringify({
    columns: result.columns,
    rows: result.rows.map((row) => {
      const normalized = {};
      result.columns.forEach((column) => {
        normalized[column] = row[column];
      });
      return normalized;
    })
  });
}

function checkAnswer() {
  const result = runCurrentQuery(false);
  if (!result) return;
  const expected = activeExercise().expected;
  if (normalizeResult(result) === normalizeResult(expected)) {
    state.solved.add(exerciseKey());
    localStorage.setItem("querycraftSolved", JSON.stringify(Array.from(state.solved)));
    els.exerciseStatus.textContent = "Solved";
    setFeedback("Correct. Nice work. This exercise is complete.", "success");
    renderLessons();
    renderExercises();
    renderProgress();
    return;
  }
  setFeedback("Not quite yet. Compare the columns, row order, and filters with the exercise prompt.", "warning");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

els.lessonNav.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-lesson]");
  if (button) loadLesson(Number(button.dataset.lesson));
});

els.exerciseList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-exercise]");
  if (button) loadExercise(Number(button.dataset.exercise));
});

els.runBtn.addEventListener("click", () => runCurrentQuery(true));
els.checkBtn.addEventListener("click", checkAnswer);
els.hintBtn.addEventListener("click", () => setFeedback(activeExercise().hint, "warning"));
els.solutionBtn.addEventListener("click", () => {
  els.queryInput.value = activeExercise().solution;
  setFeedback("Solution loaded. Run it, inspect the result, then check the answer.", "warning");
  runCurrentQuery(false);
});
els.prevBtn.addEventListener("click", () => loadLesson(state.activeLesson - 1));
els.nextBtn.addEventListener("click", () => loadLesson(state.activeLesson + 1));
els.resetProgressBtn.addEventListener("click", () => {
  state.solved.clear();
  Object.keys(localStorage).forEach((key) => {
    if (key.startsWith("querycraft")) localStorage.removeItem(key);
  });
  loadLesson(0);
  setFeedback("Progress reset.", "warning");
});
els.queryInput.addEventListener("input", () => {
  localStorage.setItem(`querycraftDraft:${exerciseKey()}`, els.queryInput.value);
});
els.queryInput.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
    event.preventDefault();
    runCurrentQuery(true);
  }
});

renderSchema();
configureCheckout();
loadLesson(0);
