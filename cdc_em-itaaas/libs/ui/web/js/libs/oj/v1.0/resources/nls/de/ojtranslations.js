define(
{
    'oj-message' : 
    {
      'fatal' : '$[PX$]$[Fatal ä$]',
      'error': '$[PX$]$[Error ä$]',
      'warning': '$[PX$]$[Warning ä$]',
      'info' : '$[PX$]$[Info ä$]',
      'confirmation' : '$[PX$]$[Confirmation ä$]',
      'compact-type-summary': '{0}: {1}'
    },
    'oj-converter': 
    {
      'summary': '$[PX$]$[The value is not in the expected format. äëü\'\\$]',
      'detail': '$[PX$]$[Enter a value in the expected format. äëü\'$]',
      'plural-separator' : ", ",

      
      // when we want to show a hint. 
      'hint': 
      {
        'summary': "$[PX$]$[Example: {exampleValue} ä$]",
        'detail': "$[PX$]$[Enter a value in the same format as this example: '{exampleValue}' äëü'\\&äëü'\\&ä$]",
        'detail-plural': "$[PX$]$[Enter a value in the same format as these examples: '{exampleValue}' äëü'\\&äëü'\\&ä$]"
      },
      
      // when the option values are not what we expected and we tell users what values we accept
      'optionHint' : 
      {
        'detail': "$[PX$]$[An accepted value for '{propertyName}' is '{propertyValueValid}'. äëü'\\&äëü'\\&ä$]",
        'detail-plural': "$[PX$]$[Accepted values for '{propertyName}' are '{propertyValueValid}'. äëü'\\&äëü'\\&$]",
      },

      // when converter options are incorrect
      'optionTypesMismatch': 
      {
        'summary': "$[PX$]$[A value for the property '{requiredPropertyName}' is required when the property '{propertyName}' is set to '{propertyValue}'. äëü'\\&äëü'\\&äëü'\\&äëü'\\&äëü'\\&ä$]"
      },
      'optionTypeInvalid': 
      {
        'summary': "$[PX$]$[A value of the expected type was not provided for '{propertyName}'. äëü'\\&äëü'\\&ä$]"
      },
      'optionOutOfRange': 
      {
        'summary': "$[PX$]$[The value {propertyValue} is out of range for the option '{propertyName}'. äëü'\\&äëü'\\&äëü$]"
      },
      'optionValueInvalid': 
      {
        'summary': "$[PX$]$[An invalid value '{propertyValue}' was specified for the option '{propertyName}'. äëü'\\&äëü'\\&äëü'\\$]"
      },

      'number': 
      {
        // when the the value fails number conversion
        'decimalFormatMismatch': 
        {
          'summary': "$[PX$]$[The decimal '{value}' is not in the expected format. äëü'\\&äë$]"
        },
        'currencyFormatMismatch': 
        {
          'summary': "$[PX$]$[The currency '{value}' is not in the expected format. äëü'\\&äëü$]"
        },
        'percentFormatMismatch' : 
        {
          'summary': "$[PX$]$[The percent '{value}' is not in the expected format. äëü'\\&äë$]"
        }
      },
      'datetime': 
      {
        // when the the value fails date time conversion
        'datetimeOutOfRange': 
        {
          'summary': "$[PX$]$[The value '{value}' is out of range for the '{propertyName}'. äëü'\\&äëü'\\$]",
          'detail': "$[PX$]$[Enter a value between '{minValue}' and '{maxValue}'. äëü'\\&äëü$]"
        },
        'dateFormatMismatch': 
        {
          'summary': "$[PX$]$[The date '{value}' is not in the expected format. äëü'\\&äë$]"
        },
        'timeFormatMismatch':
        {
          'summary': "$[PX$]$[The time '{value}' is not in the expected format. äëü'\\&äë$]"
        },
        'datetimeFormatMismatch': 
        {
          'summary': "$[PX$]$[The datetime '{value}' is not in the expected format. äëü'\\&äëü$]"
        },
        'dateToWeekdayMismatch' : 
        {
          'summary': "$[PX$]$[Day '{date}' does not fall on a '{weekday}'. äëü'\\&$]",
          'detail' : "$[PX$]$[Enter a weekday that corresponds with the date. äëü'\\&ä$]"
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
          'summary' : '$[PX$]$[The number of characters is out of range. äëü\'\\$]',
          'detail' : '$[PX$]$[The number must be between {min} and {max}. äëü\'\\&$]',
          'hint' : '$[PX$]$[Enter {min} or more characters, up to a maximum of {max}. äëü\'\\&äëü\'$]'
        },
        'min':
        {
          'summary' : '$[PX$]$[There are too few characters. ä$]',
          'detail' : '$[PX$]$[Enter {min} or more characters, not fewer. äëü\'\\$]',
          'hint' : '$[PX$]$[Enter {min} or more characters. äë$]'
        },
        'max':
        {
          'summary' : '$[PX$]$[There are too many characters. äë$]',
          'detail' : '$[PX$]$[Enter {max} or fewer characters, not more. äëü\'\\$]',
          'hint' : '$[PX$]$[Enter {max} or fewer characters äë$]'
        },
        'exact': 
        {
          'summary': '$[PX$]$[The number of characters is incorrect. äëü\'$]',
          'detail': '$[PX$]$[Enter exactly {length} characters. äëü$]',
          'hint': '$[PX$]$[Enter {length} characters. ä$]'
        }

      },
      'range':
      {
        'number': 
        {
          'range':
          {
            'summary' : '$[PX$]$[The number is out of range. ä$]',
            'detail' : '$[PX$]$[The number {value} must be between {min} and {max}. äëü\'\\&äëü$]',
            'hint' : '$[PX$]$[Enter a number between {min} and {max}. äëü\'\\$]'
          },
          'min':
          {
            'summary' : '$[PX$]$[The number is too low. ä$]',
            'detail' : '$[PX$]$[The number {value} must be greater than or equal to {min}. äëü\'\\&äëü\'\\$]',
            'hint' : '$[PX$]$[Enter a number greater than or equal to {min}. äëü\'\\&ä$]'
          },
          'max':
          {
            'summary' : '$[PX$]$[The number is too high. ä$]',
            'detail' : '$[PX$]$[The number {value} must be less than or equal to {max}. äëü\'\\&äëü\'$]',
            'hint' : '$[PX$]$[Enter a number less than or equal to {max}. äëü\'\\&$]'
          }
        },
        'datetime': 
        {
          'range':
          {
            'summary' : '$[PX$]$[The datetime is out of range. ä$]',
            'detail' : '$[PX$]$[The datetime must be between {min} and {max}. äëü\'\\&ä$]',
            'hint' : '$[PX$]$[Enter a datetime between {min} and {max}. äëü\'\\$]'
          },
          'min':
          {
            'summary': '$[PX$]$[The datetime is earlier than the minimum date. äëü\'\\&$]',
            'detail' : '$[PX$]$[The datetime must be greater than or equal to {min}. äëü\'\\&äë$]',
            'hint' : '$[PX$]$[Enter a datetime on or after {min}. äëü$]'
          },
          'max':
          {
            'summary' : '$[PX$]$[The datetime is later than the maximum date. äëü\'\\&$]',
            'detail' : '$[PX$]$[The datetime must be less than or equal to {max}. äëü\'\\&äë$]',
            'hint' : '$[PX$]$[Enter a datetime on or before {max}. äëü\'$]'
          }
        }
      },
      'restriction':
      {
        'date': 
        {
          'dayMetaData':
          {
            'summary': '$[PX$]$[The date is a disabled entry. ä$]',
            'detail': '$[PX$]$[The date {value} should not be a disabled entry. äëü\'\\&ä$]'
          }
        }
      },
      'regExp': 
      {
        'summary': "$[PX$]$[The format is incorrect. ä$]",
        'detail': "$[PX$]$[The value '{value}' must match this pattern: '{pattern}' äëü'\\&äëü'$]"
      },
      'required':
      {
        'summary': '$[PX$]$[A value is required. ä$]',
        'detail': '$[PX$]$[You must enter a value. ä$]'
      }
    },
        
    'oj-ojInputDate':
    {
      'closeText': '$[PX$]$[Done ä$]',
      'prevText': '$[PX$]$[Prev ä$]',
      'nextText': '$[PX$]$[Next ä$]',
      'currentText': '$[PX$]$[Today ä$]',
      'weekHeader': '$[PX$]$[Wk ä$]',
      'datePicker': '$[PX$]$[Date Picker ä$]',
              'inputDetail': '$[PX$]$[Keydown for access to Calendar äë$]'
    },
        
        'oj-ojInputTime':
        {
          'inputDetail': '$[PX$]$[Keydown for access to time drop down äëü$]'
        },

    'oj-ojDataGrid':
    {
              'fetching': '$[PX$]$[Fetching Data... ä$]',
              'empty': '$[PX$]$[There are no data. ä$]',
              'resize': '$[PX$]$[Resize ä$]',
              'resizeWidth': '$[PX$]$[Resize Width ä$]',
              'resizeHeight': '$[PX$]$[Resize Height ä$]',
              'sortRow': '$[PX$]$[Sort Row ä$]',
              'sortRowAsc': '$[PX$]$[Sort Row Ascending ä$]',
              'sortRowDsc': '$[PX$]$[Sort Row Descending ä$]',
              'sortCol': '$[PX$]$[Sort Column ä$]',
              'sortColAsc': '$[PX$]$[Sort Column Ascending ä$]',
              'sortColDsc': '$[PX$]$[Sort Column Descending ä$]',
              'summary-exact': '$[PX$]$[There are {0} rows and {1} coulmns äëü$]',
              'summary-estimate': '$[PX$]$[There are approximately {0} rows and approximately {1} coulmns äëü\'\\&äëü\'\\&$]',
              'expand': '$[PX$]$[Row expanded ä$]',
              'collapse': '$[PX$]$[Row collapsed ä$]',
              'cut': '$[PX$]$[Cut ä$]',
              'paste': '$[PX$]$[Paste ä$]'
    },
    'oj-_ojLabel' :
    {
      'tooltipHelp':'$[PX$]$[Help ä$]',
      'tooltipRequired':'$[PX$]$[Required ä$]'
    },
    'oj-ojInputNumber' :
    {
      'tooltipDecrement':'$[PX$]$[Decrement ä$]',
      'tooltipIncrement':'$[PX$]$[Increment ä$]'
    },
    // translations used by the table component 
    'oj-ojTable': 
    {
      'labelRequired':'$[PX$]$[Required ä$]',
      'labelSelectRow':'$[PX$]$[Select Row ä$]',
      'labelSelectColumn':'$[PX$]$[Select Column ä$]',
      'labelSort': '$[PX$]$[Sort ä$]',
                  'labelSortAsc': '$[PX$]$[Sort Ascending ä$]',
                  'labelSortDsc': '$[PX$]$[Sort Descending ä$]',
      'msgFetchingData':'$[PX$]$[Fetching Data... ä$]',
      'msgNoData':'$[PX$]$[No data to display. ä$]',

      'activeRowUnavailableIndex':
      {
        'summary': '$[PX$]$[Did not change active row due to unavailable row index. äëü\'\\&äëü$]',
        'detail': '$[PX$]$[Unavailable row index: {0}. ä$]'
      },
      'columnRendererColumnNotFound':
      {
        'summary': '$[PX$]$[Cannot find column with id {0} for column renderer. äëü\'\\&äë$]',
        'detail': '$[PX$]$[Please make sure a column with the matching column Id exists for the column renderer. äëü\'\\&äëü\'\\&äëü\'\\&$]'
      },
      'columnRendererOptionRequired':
      {
        'summary': '$[PX$]$[Option {0} is required for column renderer. äëü\'\\&$]',
        'detail': '$[PX$]$[Please specify option {0} for column renderer. äëü\'\\&ä$]'
      },
      'dataInvalidType':
      {
        'summary': '$[PX$]$[Invalid data type. ä$]',
        'detail': '$[PX$]$[Please specify oj.Collection or oj.TableDataSource or ko.observableArray. äëü\'\\&äëü\'\\&äë$]'
      },
      'dataUnitialized':
      {
        'summary': '$[PX$]$[Data is empty or uninitialized. äë$]',
        'detail': '$[PX$]$[Please specify data. ä$]'
      },
      'preActiveRowError':
      {
        'summary': '$[PX$]$[Did not change active row due to error. äëü\'$]',
        'detail': '$[PX$]$[Error detail: {0}. ä$]'
      },
      'refreshRowInvalidRowIndex':
      {
        'summary': '$[PX$]$[Invalid row index value. ä$]',
        'detail': '$[PX$]$[Row index: {0}. ä$]'
      }
    },

    'oj-ojTree':
    {
              'm_loading': '$[PX$]$[Loading... ä$]',
              'm_newnode': '$[PX$]$[New Node ä$]',
              'm_multisel': '$[PX$]$[Multiple Selection ä$]',
              'm_edit': '$[PX$]$[Edit ä$]',
              'm_create': '$[PX$]$[Create ä$]',
              'm_cut': '$[PX$]$[Cut ä$]',
              'm_copy': '$[PX$]$[Copy ä$]',
              'm_paste': '$[PX$]$[Paste ä$]',
              'm_remove': '$[PX$]$[Remove ä$]',
              'm_rename': '$[PX$]$[Rename ä$]'
    },

    'oj-ojPagingControl': 
    {
      'labelAccPaging': '$[PX$]$[Pagination ä$]',
      'labelAccNavFirstPage': '$[PX$]$[First Page ä$]',
      'labelAccNavLastPage': '$[PX$]$[Last Page ä$]',
      'labelAccNavNextPage': '$[PX$]$[Next Page ä$]',
      'labelAccNavPreviousPage': '$[PX$]$[Previous Page ä$]',
      'labelAccNavPage': '$[PX$]$[Page ä$]',
      'labelLoadMore':'$[PX$]$[Show More... ä$]',
      'labelNavInputPage':'$[PX$]$[Page ä$]',
      'labelNavInputPageMax':'$[PX$]$[of {0} ä$]',
      'labelNavInputPageSummary':'({0})',
      'msgItemRange':'$[PX$]$[{0}-{1} of {2} items ä$]',
      'msgItemRangeUnknown':'$[PX$]$[{0}-{1} items ä$]',
      'tipNavInputPage':'$[PX$]$[Go To Page ä$]',
      'tipNavPageLink':'$[PX$]$[Go To Page {0} ä$]',
      'tipNavNextPage':'$[PX$]$[Next ä$]',
      'tipNavPreviousPage':'$[PX$]$[Previous ä$]',
      'tipNavFirstPage':'$[PX$]$[First ä$]',
      'tipNavLastPage':'$[PX$]$[Last ä$]',
      
      'pageInvalid':
      {
        'summary': '$[PX$]$[The page value entered is invalid. äëü$]',
        'detail': '$[PX$]$[Please enter a value greater than 0. äëü$]'
      },
      
      'maxPageLinksInvalid':
      {
        'summary': '$[PX$]$[Value for maxPageLinks is invalid. äëü$]',
        'detail': '$[PX$]$[Please enter a value greater than 4. äëü$]'
      }
    },
    
    // DVT Components
    'oj-ojChart': {
      'labelDefaultGroupName': '$[PX$]$[Group {0} ä$]',
      'labelSeries': '$[PX$]$[Series: {0} ä$]',
      'labelGroup': '$[PX$]$[Group: {0} ä$]',
      'labelValue': '$[PX$]$[Value: {0} ä$]',
      'labelTargetValue': '$[PX$]$[Target: {0} ä$]',
      'labelX': 'X: {0}',
      'labelY': 'Y: {0}',
      'labelZ': 'Z: {0}',
      'labelLow': '$[PX$]$[Low: {0} ä$]',
      'labelHigh': '$[PX$]$[High: {0} ä$]',
      'labelOther': '$[PX$]$[Other ä$]',
      
      'tooltipPan': '$[PX$]$[Pan ä$]',
      'tooltipSelect': '$[PX$]$[Marquee select ä$]',
      'tooltipZoom': '$[PX$]$[Marquee zoom ä$]'
    },
    'oj-ojSunburst': {
      'labelColor': '$[PX$]$[Color ä$]',
      'labelSize': '$[PX$]$[Size ä$]'
    },
    'oj-ojTreemap': {
      'labelColor': '$[PX$]$[Color ä$]',
      'labelSize': '$[PX$]$[Size ä$]'
    },
    'oj-ojDvtCommon': {
      'labelClearSelection': '$[PX$]$[Clear Selection ä$]',
      
      'labelMonthShortJanuary': '$[PX$]$[Jan ä$]',
      'labelMonthShortFebruary': '$[PX$]$[Feb ä$]',
      'labelMonthShortMarch': '$[PX$]$[Mar ä$]',
      'labelMonthShortApril': '$[PX$]$[Apr ä$]',
      'labelMonthShortMay': '$[PX$]$[May ä$]',
      'labelMonthShortJune': '$[PX$]$[Jun ä$]',
      'labelMonthShortJuly': '$[PX$]$[Jul ä$]',
      'labelMonthShortAugust': '$[PX$]$[Aug ä$]',
      'labelMonthShortSeptember': '$[PX$]$[Sep ä$]',
      'labelMonthShortOctober': '$[PX$]$[Oct ä$]',
      'labelMonthShortNovember': '$[PX$]$[Nov ä$]',
      'labelMonthShortDecember': '$[PX$]$[Dec ä$]',
    
      'labelScalingSuffixThousand': '$[PX$]$[K ä$]',
      'labelScalingSuffixMillion': '$[PX$]$[M ä$]',
      'labelScalingSuffixBillion': '$[PX$]$[B ä$]',
      'labelScalingSuffixTrillion': '$[PX$]$[T ä$]',
      'labelScalingSuffixQuadrillion': '$[PX$]$[Q ä$]',
      
      'msgNoData': '$[PX$]$[No data to display ä$]'
    }
}
);
