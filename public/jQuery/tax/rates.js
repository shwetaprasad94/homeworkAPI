const salesTaxData = {
  meta: {
    copyright: 'https://github.com/wiredmax/canadian-sales-tax/blob/master/dist/json/canadian-sales-tax.json'
  },
  provinces: {
    AB: {
      name: 'Alberta',
      taxes: [
        {
          code: 'GST',
          name: 'Goods and Services Tax',
          type: 'federal',
          tax: 0.05
        }
      ]
    },
    BC: {
      name: 'British Columbia',
      taxes: [
        {
          code: 'GST',
          name: 'Goods and Services Tax',
          type: 'federal',
          tax: 0.05
        },
        {
          code: 'PST',
          name: 'Provincial sales tax',
          type: 'provincial',
          tax: 0.07
        }
      ]
    },
    MB: {
      name: 'Manitoba',
      taxes: [
        {
          code: 'GST',
          name: 'Goods and Services Tax',
          type: 'federal',
          tax: 0.05
        },
        {
          code: 'PST',
          name: 'Provincial sales tax',
          type: 'provincial',
          tax: 0.08
        }
      ]
    },
    NB: {
      name: 'New Brunswick',
      taxes: [
        {
          code: 'HST',
          name: 'Harmonized Sales Tax',
          type: 'harmonized',
          tax: 0.13
        }
      ]
    },
    NL: {
      name: 'Newfoundland and Labrador',
      taxes: [
        {
          code: 'HST',
          name: 'Harmonized Sales Tax',
          type: 'harmonized',
          tax: 0.13
        }
      ]
    },
    NS: {
      name: 'Nova Scotia',
      taxes: [
        {
          code: 'HST',
          name: 'Harmonized Sales Tax',
          type: 'harmonized',
          tax: 0.15
        }
      ]
    },
    NT: {
      name: 'Northwest Territories',
      taxes: [
        {
          code: 'GST',
          name: 'Goods and Services Tax',
          type: 'federal',
          tax: 0.05
        }
      ]
    },
    NU: {
      name: 'Nunavut',
      taxes: [
        {
          code: 'GST',
          name: 'Goods and Services Tax',
          type: 'federal',
          tax: 0.05
        }
      ]
    },
    ON: {
      name: 'Ontario',
      taxes: [
        {
          code: 'HST',
          name: 'Harmonized Sales Tax',
          type: 'harmonized',
          tax: 0.13
        }
      ]
    },
    PE: {
      name: 'Prince Edward Island',
      taxes: [
        {
          code: 'HST',
          name: 'Harmonized Sales Tax',
          type: 'harmonized',
          tax: 0.14
        }
      ]
    },
    QC: {
      name: 'Quebec',
      taxes: [
        {
          code: 'GST',
          name: 'Goods and Services Tax',
          type: 'federal',
          tax: 0.05
        },
        {
          code: 'QST',
          name: 'Quebec Sales Tax',
          type: 'provincial',
          tax: 0.09975
        }
      ]
    },
    SK: {
      name: 'Saskatchewan',
      taxes: [
        {
          code: 'GST',
          name: 'Goods and Services Tax',
          type: 'federal',
          tax: 0.05
        },
        {
          code: 'PST',
          name: 'Provincial sales tax',
          type: 'provincial',
          tax: 0.05
        }
      ]
    },
    YT: {
      name: 'Yukon',
      taxes: [
        {
          code: 'GST',
          name: 'Goods and Services Tax',
          type: 'federal',
          tax: 0.05
        }
      ]
    }
  }
};

// If Node.js then export as public
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {
    salesTaxData
  };
}
