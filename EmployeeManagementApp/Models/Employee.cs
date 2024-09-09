using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace EmployeeManagementApp.Models
{
    public class Employee
    {
        [Key]
        [DisplayName("Employee Id")]
        public int emp_id { get; set; }

        [Required(ErrorMessage ="Name is required")]
        [DisplayName("First Name")]
        public string first_name { get; set; }

        [Required]
        [DisplayName("Last Name")]
        public string last_name { get; set; }

        [Required]
        [DisplayName("Date of Birth")]
        [DataType(DataType.Date)]
        public DateTime date_of_birth { get; set; }

        [Required]
        [DisplayName("Gender")]
        public string gender { get; set; }

        [Required]
        [DisplayName("Address")]
        public string address { get; set; }

        [Required]
        [Phone]
        [RegularExpression(@"^([0-9]{10})$", ErrorMessage = "Invalid Phone Number.")]
        //[StringLength(10)]  Adjust the length as needed
        [DisplayName("Mobile No.")]
        public string mobile_no { get; set; }

        [Required]
        [EmailAddress]
        [DisplayName("Email")]
        public string email { get; set; }

        [Required]
        [DataType(DataType.Date)]
        [DisplayName("Joining Date")]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [RestrictToTodayOrEarlier(ErrorMessage = "Joining date must be today or earlier.")]
        public DateTime joining_date { get; set; }

        [DataType(DataType.Date)]
        [DisplayName("Leaving Date")]
        public DateTime? leaving_date { get; set; }
    }
    public class RestrictToTodayOrEarlierAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            if (value != null)
            {
                DateTime dateTimeValue = (DateTime)value;
                if (dateTimeValue.Date > DateTime.Today)
                {
                    return new ValidationResult(ErrorMessage);
                }
            }
            return ValidationResult.Success;
        }
    }
}
