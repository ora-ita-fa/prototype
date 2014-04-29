define(
{
    'oj-message' : 
    {
      'fatal' : '$[PX$]$[Fatal ぃ$]',
      'error': '$[PX$]$[Error ぃ$]',
      'warning': '$[PX$]$[Warning ぃ$]',
      'info' : '$[PX$]$[Info ぃ$]',
      'confirmation' : '$[PX$]$[Confirmation ぃ$]',
      'compact-type-summary': '{0}: {1}'
    },
    'oj-converter': 
    {
      'summary': '$[PX$]$[The value is not in the expected format. ぃぁあ\'\\&$]',
      'detail': '$[PX$]$[Enter a value in the expected format. ぃぁあ\'\\$]',
      'plural-separator' : ", ",

      
      // when we want to show a hint. 
      'hint': 
      {
        'summary': "$[PX$]$[Example: {exampleValue} ぃ$]",
        'detail': "$[PX$]$[Enter a value in the same format as this example: '{exampleValue}' ぃぁあ'\\&ぃぁあ'\\&ぃぁあ$]",
        'detail-plural': "$[PX$]$[Enter a value in the same format as these examples: '{exampleValue}' ぃぁあ'\\&ぃぁあ'\\&ぃぁあ$]"
      },
      
      // when the option values are not what we expected and we tell users what values we accept
      'optionHint' : 
      {
        'detail': "$[PX$]$[An accepted value for '{propertyName}' is '{propertyValueValid}'. ぃぁあ'\\&ぃぁあ'\\&ぃぁあ$]",
        'detail-plural': "$[PX$]$[Accepted values for '{propertyName}' are '{propertyValueValid}'. ぃぁあ'\\&ぃぁあ'\\&ぃぁ$]",
      },

      // when converter options are incorrect
      'optionTypesMismatch': 
      {
        'summary': "$[PX$]$[A value for the property '{requiredPropertyName}' is required when the property '{propertyName}' is set to '{propertyValue}'. ぃぁあ'\\&ぃぁあ'\\&ぃぁあ'\\&ぃぁあ'\\&ぃぁあ'\\&ぃぁあ'\\$]"
      },
      'optionTypeInvalid': 
      {
        'summary': "$[PX$]$[A value of the expected type was not provided for '{propertyName}'. ぃぁあ'\\&ぃぁあ'\\&ぃぁあ$]"
      },
      'optionOutOfRange': 
      {
        'summary': "$[PX$]$[The value {propertyValue} is out of range for the option '{propertyName}'. ぃぁあ'\\&ぃぁあ'\\&ぃぁあ'\\&$]"
      },
      'optionValueInvalid': 
      {
        'summary': "$[PX$]$[An invalid value '{propertyValue}' was specified for the option '{propertyName}'. ぃぁあ'\\&ぃぁあ'\\&ぃぁあ'\\&ぃぁ$]"
      },

      'number': 
      {
        // when the the value fails number conversion
        'decimalFormatMismatch': 
        {
          'summary': "$[PX$]$[The decimal '{value}' is not in the expected format. ぃぁあ'\\&ぃぁあ'$]"
        },
        'currencyFormatMismatch': 
        {
          'summary': "$[PX$]$[The currency '{value}' is not in the expected format. ぃぁあ'\\&ぃぁあ'$]"
        },
        'percentFormatMismatch' : 
        {
          'summary': "$[PX$]$[The percent '{value}' is not in the expected format. ぃぁあ'\\&ぃぁあ'$]"
        }
      },
      'datetime': 
      {
        // when the the value fails date time conversion
        'datetimeOutOfRange': 
        {
          'summary': "$[PX$]$[The value '{value}' is out of range for the '{propertyName}'. ぃぁあ'\\&ぃぁあ'\\&ぃ$]",
          'detail': "$[PX$]$[Enter a value between '{minValue}' and '{maxValue}'. ぃぁあ'\\&ぃぁあ'$]"
        },
        'dateFormatMismatch': 
        {
          'summary': "$[PX$]$[The date '{value}' is not in the expected format. ぃぁあ'\\&ぃぁあ$]"
        },
        'timeFormatMismatch':
        {
          'summary': "$[PX$]$[The time '{value}' is not in the expected format. ぃぁあ'\\&ぃぁあ$]"
        },
        'datetimeFormatMismatch': 
        {
          'summary': "$[PX$]$[The datetime '{value}' is not in the expected format. ぃぁあ'\\&ぃぁあ'$]"
        },
        'dateToWeekdayMismatch' : 
        {
          'summary': "$[PX$]$[Day '{date}' does not fall on a '{weekday}'. ぃぁあ'\\&ぃぁ$]",
          'detail' : "$[PX$]$[Enter a weekday that corresponds with the date. ぃぁあ'\\&ぃぁ$]"
        }
      }
    },
    // translations used by the validators 
    'oj-validator': 
    {
      'length' :
      {
        'range':
        {
          'summary' : '$[PX$]$[The number of characters is out of range. ぃぁあ\'\\&$]',
          'detail' : '$[PX$]$[The number must be between {min} and {max}. ぃぁあ\'\\&ぃ$]',
          'hint' : '$[PX$]$[Enter {min} or more characters, up to a maximum of {max}. ぃぁあ\'\\&ぃぁあ\'\\&$]'
        },
        'min':
        {
          'summary' : '$[PX$]$[There are too few characters. ぃぁ$]',
          'detail' : '$[PX$]$[Enter {min} or more characters, not fewer. ぃぁあ\'\\&ぃ$]',
          'hint' : '$[PX$]$[Enter {min} or more characters. ぃぁあ$]'
        },
        'max':
        {
          'summary' : '$[PX$]$[There are too many characters. ぃぁ$]',
          'detail' : '$[PX$]$[Enter {max} or fewer characters, not more. ぃぁあ\'\\&ぃ$]',
          'hint' : '$[PX$]$[Enter {max} or fewer characters ぃぁあ$]'
        },
        'exact': 
        {
          'summary': '$[PX$]$[The number of characters is incorrect. ぃぁあ\'\\$]',
          'detail': '$[PX$]$[Enter exactly {length} characters. ぃぁあ\'$]',
          'hint': '$[PX$]$[Enter {length} characters. ぃ$]'
        }

      },
      'range':
      {
        'number': 
        {
          'range':
          {
            'summary' : '$[PX$]$[The number is out of range. ぃ$]',
            'detail' : '$[PX$]$[The number {value} must be between {min} and {max}. ぃぁあ\'\\&ぃぁあ\'$]',
            'hint' : '$[PX$]$[Enter a number between {min} and {max}. ぃぁあ\'\\&$]'
          },
          'min':
          {
            'summary' : '$[PX$]$[The number is too low. ぃ$]',
            'detail' : '$[PX$]$[The number {value} must be greater than or equal to {min}. ぃぁあ\'\\&ぃぁあ\'\\&$]',
            'hint' : '$[PX$]$[Enter a number greater than or equal to {min}. ぃぁあ\'\\&ぃぁ$]'
          },
          'max':
          {
            'summary' : '$[PX$]$[The number is too high. ぃ$]',
            'detail' : '$[PX$]$[The number {value} must be less than or equal to {max}. ぃぁあ\'\\&ぃぁあ\'\\$]',
            'hint' : '$[PX$]$[Enter a number less than or equal to {max}. ぃぁあ\'\\&ぃ$]'
          }
        },
        'datetime': 
        {
          'range':
          {
            'summary' : '$[PX$]$[The datetime is out of range. ぃぁ$]',
            'detail' : '$[PX$]$[The datetime must be between {min} and {max}. ぃぁあ\'\\&ぃぁ$]',
            'hint' : '$[PX$]$[Enter a datetime between {min} and {max}. ぃぁあ\'\\&ぃ$]'
          },
          'min':
          {
            'summary': '$[PX$]$[The datetime is earlier than the minimum date. ぃぁあ\'\\&ぃぁ$]',
            'detail' : '$[PX$]$[The datetime must be greater than or equal to {min}. ぃぁあ\'\\&ぃぁあ\'$]',
            'hint' : '$[PX$]$[Enter a datetime on or after {min}. ぃぁあ\'$]'
          },
          'max':
          {
            'summary' : '$[PX$]$[The datetime is later than the maximum date. ぃぁあ\'\\&ぃ$]',
            'detail' : '$[PX$]$[The datetime must be less than or equal to {max}. ぃぁあ\'\\&ぃぁあ$]',
            'hint' : '$[PX$]$[Enter a datetime on or before {max}. ぃぁあ\'\\$]'
          }
        }
      },
      'restriction':
      {
        'date': 
        {
          'dayMetaData':
          {
            'summary': '$[PX$]$[The date is a disabled entry. ぃぁ$]',
            'detail': '$[PX$]$[The date {value} should not be a disabled entry. ぃぁあ\'\\&ぃぁあ$]'
          }
        }
      },
      'regExp': 
      {
        'summary': "$[PX$]$[The format is incorrect. ぃ$]",
        'detail': "$[PX$]$[The value '{value}' must match this pattern: '{pattern}' ぃぁあ'\\&ぃぁあ'\\&$]"
      },
      'required':
      {
        'summary': '$[PX$]$[A value is required. ぃ$]',
        'detail': '$[PX$]$[You must enter a value. ぃ$]'
      }
    },
        
    'oj-ojInputDate':
    {
      'closeText': '$[PX$]$[Done ぃ$]',
      'prevText': '$[PX$]$[Prev ぃ$]',
      'nextText': '$[PX$]$[Next ぃ$]',
      'currentText': '$[PX$]$[Today ぃ$]',
      'weekHeader': '$[PX$]$[Wk ぃ$]',
      'datePicker': '$[PX$]$[Date Picker ぃ$]',
              'inputDetail': '$[PX$]$[Keydown for access to Calendar ぃぁ$]'
    },
        
        'oj-ojInputTime':
        {
          'inputDetail': '$[PX$]$[Keydown for access to time drop down ぃぁあ\'$]'
        },

    'oj-ojDataGrid':
    {
              'fetching': '$[PX$]$[Fetching Data... ぃ$]',
              'empty': '$[PX$]$[There are no data. ぃ$]',
              'resize': '$[PX$]$[Resize ぃ$]',
              'resizeWidth': '$[PX$]$[Resize Width ぃ$]',
              'resizeHeight': '$[PX$]$[Resize Height ぃ$]',
              'sortRow': '$[PX$]$[Sort Row ぃ$]',
              'sortRowAsc': '$[PX$]$[Sort Row Ascending ぃ$]',
              'sortRowDsc': '$[PX$]$[Sort Row Descending ぃ$]',
              'sortCol': '$[PX$]$[Sort Column ぃ$]',
              'sortColAsc': '$[PX$]$[Sort Column Ascending ぃ$]',
              'sortColDsc': '$[PX$]$[Sort Column Descending ぃ$]',
              'summary-exact': '$[PX$]$[There are {0} rows and {1} coulmns ぃぁあ\'$]',
              'summary-estimate': '$[PX$]$[There are approximately {0} rows and approximately {1} coulmns ぃぁあ\'\\&ぃぁあ\'\\&ぃぁ$]',
              'expand': '$[PX$]$[Row expanded ぃ$]',
              'collapse': '$[PX$]$[Row collapsed ぃ$]',
              'cut': '$[PX$]$[Cut ぃ$]',
              'paste': '$[PX$]$[Paste ぃ$]'
    },
    'oj-_ojLabel' :
    {
      'tooltipHelp':'$[PX$]$[Help ぃ$]',
      'tooltipRequired':'$[PX$]$[Required ぃ$]'
    },
    'oj-ojInputNumber' :
    {
      'tooltipDecrement':'$[PX$]$[Decrement ぃ$]',
      'tooltipIncrement':'$[PX$]$[Increment ぃ$]'
    },
    // translations used by the table component 
    'oj-ojTable': 
    {
      'labelRequired':'$[PX$]$[Required ぃ$]',
      'labelSelectRow':'$[PX$]$[Select Row ぃ$]',
      'labelSelectColumn':'$[PX$]$[Select Column ぃ$]',
      'labelSort': '$[PX$]$[Sort ぃ$]',
                  'labelSortAsc': '$[PX$]$[Sort Ascending ぃ$]',
                  'labelSortDsc': '$[PX$]$[Sort Descending ぃ$]',
      'msgFetchingData':'$[PX$]$[Fetching Data... ぃ$]',
      'msgNoData':'$[PX$]$[No data to display. ぃ$]',

      'activeRowUnavailableIndex':
      {
        'summary': '$[PX$]$[Did not change active row due to unavailable row index. ぃぁあ\'\\&ぃぁあ\'\\$]',
        'detail': '$[PX$]$[Unavailable row index: {0}. ぃぁ$]'
      },
      'columnRendererColumnNotFound':
      {
        'summary': '$[PX$]$[Cannot find column with id {0} for column renderer. ぃぁあ\'\\&ぃぁあ\'$]',
        'detail': '$[PX$]$[Please make sure a column with the matching column Id exists for the column renderer. ぃぁあ\'\\&ぃぁあ\'\\&ぃぁあ\'\\&ぃぁあ$]'
      },
      'columnRendererOptionRequired':
      {
        'summary': '$[PX$]$[Option {0} is required for column renderer. ぃぁあ\'\\&ぃ$]',
        'detail': '$[PX$]$[Please specify option {0} for column renderer. ぃぁあ\'\\&ぃぁ$]'
      },
      'dataInvalidType':
      {
        'summary': '$[PX$]$[Invalid data type. ぃ$]',
        'detail': '$[PX$]$[Please specify oj.Collection or oj.TableDataSource or ko.observableArray. ぃぁあ\'\\&ぃぁあ\'\\&ぃぁあ\'\\$]'
      },
      'dataUnitialized':
      {
        'summary': '$[PX$]$[Data is empty or uninitialized. ぃぁあ$]',
        'detail': '$[PX$]$[Please specify data. ぃ$]'
      },
      'preActiveRowError':
      {
        'summary': '$[PX$]$[Did not change active row due to error. ぃぁあ\'\\$]',
        'detail': '$[PX$]$[Error detail: {0}. ぃ$]'
      },
      'refreshRowInvalidRowIndex':
      {
        'summary': '$[PX$]$[Invalid row index value. ぃ$]',
        'detail': '$[PX$]$[Row index: {0}. ぃ$]'
      }
    },

    'oj-ojTree':
    {
              'm_loading': '$[PX$]$[Loading... ぃ$]',
              'm_newnode': '$[PX$]$[New Node ぃ$]',
              'm_multisel': '$[PX$]$[Multiple Selection ぃ$]',
              'm_edit': '$[PX$]$[Edit ぃ$]',
              'm_create': '$[PX$]$[Create ぃ$]',
              'm_cut': '$[PX$]$[Cut ぃ$]',
              'm_copy': '$[PX$]$[Copy ぃ$]',
              'm_paste': '$[PX$]$[Paste ぃ$]',
              'm_remove': '$[PX$]$[Remove ぃ$]',
              'm_rename': '$[PX$]$[Rename ぃ$]'
    },

    'oj-ojPagingControl': 
    {
      'labelAccPaging': '$[PX$]$[Pagination ぃ$]',
      'labelAccNavFirstPage': '$[PX$]$[First Page ぃ$]',
      'labelAccNavLastPage': '$[PX$]$[Last Page ぃ$]',
      'labelAccNavNextPage': '$[PX$]$[Next Page ぃ$]',
      'labelAccNavPreviousPage': '$[PX$]$[Previous Page ぃ$]',
      'labelAccNavPage': '$[PX$]$[Page ぃ$]',
      'labelLoadMore':'$[PX$]$[Show More... ぃ$]',
      'labelNavInputPage':'$[PX$]$[Page ぃ$]',
      'labelNavInputPageMax':'$[PX$]$[of {0} ぃ$]',
      'labelNavInputPageSummary':'({0})',
      'msgItemRange':'$[PX$]$[{0}-{1} of {2} items ぃ$]',
      'msgItemRangeUnknown':'$[PX$]$[{0}-{1} items ぃ$]',
      'tipNavInputPage':'$[PX$]$[Go To Page ぃ$]',
      'tipNavPageLink':'$[PX$]$[Go To Page {0} ぃ$]',
      'tipNavNextPage':'$[PX$]$[Next ぃ$]',
      'tipNavPreviousPage':'$[PX$]$[Previous ぃ$]',
      'tipNavFirstPage':'$[PX$]$[First ぃ$]',
      'tipNavLastPage':'$[PX$]$[Last ぃ$]',
      
      'pageInvalid':
      {
        'summary': '$[PX$]$[The page value entered is invalid. ぃぁあ\'$]',
        'detail': '$[PX$]$[Please enter a value greater than 0. ぃぁあ\'$]'
      },
      
      'maxPageLinksInvalid':
      {
        'summary': '$[PX$]$[Value for maxPageLinks is invalid. ぃぁあ\'$]',
        'detail': '$[PX$]$[Please enter a value greater than 4. ぃぁあ\'$]'
      }
    },
    
    // DVT Components
    'oj-ojChart': {
      'labelDefaultGroupName': '$[PX$]$[Group {0} ぃ$]',
      'labelSeries': '$[PX$]$[Series: {0} ぃ$]',
      'labelGroup': '$[PX$]$[Group: {0} ぃ$]',
      'labelValue': '$[PX$]$[Value: {0} ぃ$]',
      'labelTargetValue': '$[PX$]$[Target: {0} ぃ$]',
      'labelX': 'X: {0}',
      'labelY': 'Y: {0}',
      'labelZ': 'Z: {0}',
      'labelLow': '$[PX$]$[Low: {0} ぃ$]',
      'labelHigh': '$[PX$]$[High: {0} ぃ$]',
      'labelOther': '$[PX$]$[Other ぃ$]',
      
      'tooltipPan': '$[PX$]$[Pan ぃ$]',
      'tooltipSelect': '$[PX$]$[Marquee select ぃ$]',
      'tooltipZoom': '$[PX$]$[Marquee zoom ぃ$]'
    },
    'oj-ojSunburst': {
      'labelColor': '$[PX$]$[Color ぃ$]',
      'labelSize': '$[PX$]$[Size ぃ$]'
    },
    'oj-ojTreemap': {
      'labelColor': '$[PX$]$[Color ぃ$]',
      'labelSize': '$[PX$]$[Size ぃ$]'
    },
    'oj-ojDvtCommon': {
      'labelClearSelection': '$[PX$]$[Clear Selection ぃ$]',
      
      'labelMonthShortJanuary': '$[PX$]$[Jan ぃ$]',
      'labelMonthShortFebruary': '$[PX$]$[Feb ぃ$]',
      'labelMonthShortMarch': '$[PX$]$[Mar ぃ$]',
      'labelMonthShortApril': '$[PX$]$[Apr ぃ$]',
      'labelMonthShortMay': '$[PX$]$[May ぃ$]',
      'labelMonthShortJune': '$[PX$]$[Jun ぃ$]',
      'labelMonthShortJuly': '$[PX$]$[Jul ぃ$]',
      'labelMonthShortAugust': '$[PX$]$[Aug ぃ$]',
      'labelMonthShortSeptember': '$[PX$]$[Sep ぃ$]',
      'labelMonthShortOctober': '$[PX$]$[Oct ぃ$]',
      'labelMonthShortNovember': '$[PX$]$[Nov ぃ$]',
      'labelMonthShortDecember': '$[PX$]$[Dec ぃ$]',
    
      'labelScalingSuffixThousand': '$[PX$]$[K ぃ$]',
      'labelScalingSuffixMillion': '$[PX$]$[M ぃ$]',
      'labelScalingSuffixBillion': '$[PX$]$[B ぃ$]',
      'labelScalingSuffixTrillion': '$[PX$]$[T ぃ$]',
      'labelScalingSuffixQuadrillion': '$[PX$]$[Q ぃ$]',
      
      'msgNoData': '$[PX$]$[No data to display ぃ$]'
    }
}
);
