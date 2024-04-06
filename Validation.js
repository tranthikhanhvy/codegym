function Validation()
{
    this.KiemTraRong = function(value)
    {
        if(value.trim() === "")
        {
            return true;
        }
        return false;
    }
    this.KiemTraSDT = function(value)
    {
        var re = /^\d+$/;
        if (re.test(value) && value.length == 10)
        {
            return true;
        }
        return false;
    }
}