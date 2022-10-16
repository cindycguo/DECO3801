from django.db import models
from django.utils.translation import gettext_lazy as _
import uuid

# Create your models here.
class Session(models.Model):
    """ Session Instance
    Includes subclasses: SessionStatus and SessionType.
    """
    name = models.CharField(max_length=100, unique=True)                    # name of session
    id = models.UUIDField(primary_key=True, default=uuid.uuid4,
                          help_text='Unique ID for each session')
    notes = models.CharField(max_length=1000, blank=True, null=True)        # notes associated with session

    start_date = models.DateTimeField()                                     # start time of session
    end_date = models.DateTimeField()                                       # end time of session
    created_at = models.DateTimeField(auto_now_add=True)                    # when it was created
    edited_at = models.DateTimeField(auto_now=True)                         # when it was last edited

    class Meta:
        ordering = ['start_date']                                           # default ordering of sessions

    class SessionStatus(models.TextChoices):
        """ Current status of session
        Can be filtered when queried
        """
        # Status Choices
        ACTIVE = 'ACT', _('Active')
        INACTIVE = 'INA', _('Inactive')
        CANCELLED = 'CAN', _('Cancelled')
        FINISHED = 'FIN', _('Finished')

    # Status Field
    status = models.CharField(max_length=3,
                              choices=SessionStatus.choices,
                              default=SessionStatus.INACTIVE,
                              )

    class SessionType(models.TextChoices):
        """ Session Types
        Can be filtered when queried
        """
        DEVELOPMENT = 'DEV', _('Development')
        TRAINING = 'TRA', _('Training')
        UNGUIDED = 'UNG', _('Unguided')
        GUIDED = 'GUD', _('Guided')

    # Type Field
    type = models.CharField(max_length=3,
                            choices=SessionType.choices,
                            default=SessionType.GUIDED,
                            )

    def is_active(self):
        return self.status in {self.ACTIVE}

    def get_notes(self):
        return self.notes

    def get_type(self):
        return self.type

    def __str__(self):
        return self.name

                 

   



    
       


    # Status Field


    def is_active(self):
        return self.status in {self.ACTIVE}

    def get_notes(self):
        return self.notes

    def get_type(self):
        return self.type

    def __str__(self):
        return self.name